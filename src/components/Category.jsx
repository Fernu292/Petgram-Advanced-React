import React from "react";
import { Anchor } from "../styles/CategoryStyle";

const DEFAULT_IMG = "https://imgur.com/dJa0Hpl.jpg";
export const Category = ({ cover = DEFAULT_IMG, path, emoji = "?" }) => {
    return (
        <Anchor href={path}>
            <img src={cover} />
            {emoji}
        </Anchor>
    );
};
