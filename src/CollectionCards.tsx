import React from "react";
import CollectionCardItem from "./CollectionCardItem.tsx";
import { getImageUrl } from "./pathHelpers.ts";

export default function CollectionCards() {
    return (
        <ul className="flex justify-between">
            <CollectionCardItem start={1} collectionCount={'144'}/>
            <CollectionCardItem start={5} collectionCount={'7K'}/>
            <CollectionCardItem start={9} collectionCount={'431'}/>
        </ul>
    );
}
