import React, {createContext, useState, useContext, useMemo, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD": {
            const { id, item } = action.payload;
            const current = state.items[id];
            const qty = (current?.qty ?? 0) + 1;
            const price = Number(item.price) || 0
            return { ...state, items: { ...state.items, [id]: {...item, price, qty } } };
        }
        case "REMOVE_ONE": {
            const { id } = action.payload;
            const next = { ...state.items };
            if (!next[id]) return state;
            next[id].qty -= 1;
            if (next[id].qty <= 0) delete next[id];
            return { ...state, items: next };
        }
        case "REMOVE_ALL": {
            const { id } = action.payload;
            const next = { ...state.items };
            delete next[id];
            return { ...state, items: next };
        }
        case "CLEAR":
            return { items: {} };
            default:
                return state;
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, { items: {} });

    const totals = useMemo(() => {
        let count = 0, sum = 0;
        for (const id in state.items) {
            const { price, qty } = state.items[id];
            count += qty;
            sum += price * qty;
        }
        return { count, sum };
    }, [state.items]);

    const value = useMemo(
        () => ({
            items: state.items,
            totals,
            add: (id, item) => dispatch({ type: "ADD", payload: { id, item } }),
            removeOne: (id) => dispatch({ type: "REMOVE_ONE", payload: { id } }),
            removeAll: (id) => dispatch({ type: "REMOVE_ALL", payload: { id } }),
            clear: () => dispatch({ type: "CLEAR" }),
        }),
        [state.items, totals]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within <CartProvider />");
    return ctx
};