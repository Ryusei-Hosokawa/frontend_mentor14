import React, { Component } from "react";
import { getImageUrl } from "./pathHelpers.ts";
import CollectionImage from "./CollectionImage.tsx";

interface CollectionCardItemProps {
    start: number;
    collectionCount: string;
}

export default function CollectionCardItem( { start = 1 , collectionCount } : CollectionCardItemProps ) {
    const collectionImageNumbers = Array.from(
        { length: 4 },
        (_, i) => i + start
    );

    return (
        <li className="w-[30.3%] bg-[#fff] p-[24px] rounded-[32px]">
            <article>
                <div className="h-[268px] rounded-[24px] overflow-hidden mb-[16px]">
                    <CollectionImage
                        src={getImageUrl(
                            `img_collection_${collectionImageNumbers[0]}`
                        )}
                    />
                </div>
                <div className="flex justify-between h-[97px] mb-[24px]">
                    {collectionImageNumbers.slice(1).map((collectionImageNumber) => (
                        <div
                            key={collectionImageNumber}
                            className="w-[119px] rounded-[24px] overflow-hidden"
                        >
                            <CollectionImage
                                src={getImageUrl(
                                    `img_collection_${collectionImageNumber}`
                                )}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-between">
                    <p className="font-['Poppins'] text-[24px] font-[500]">
                        People
                    </p>
                    <div className="flex justify-between items-center">
                        <img
                            className="w-[31px] h-[31px] object-cover mr-[4px]"
                            src={getImageUrl("icon_img", "svg")}
                        />
                        <p className="font-['Poppins'] font-[500] text-[16px]">
                            {collectionCount}
                        </p>
                    </div>
                </div>
            </article>
        </li>
    );
}
