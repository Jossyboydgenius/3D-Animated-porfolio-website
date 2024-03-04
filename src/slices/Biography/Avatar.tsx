"use client"

import { ImageField } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { Component, useRef } from "react";



type AvatarProps = {
    image : ImageField;
    classNmae?: string;
};

export default function Avatar({
    image, className
}: AvatarProps){
    const component = useRef(null)

    return(
        <div ref={Component} className={clsx("relative h-full w-full", className)}>
            <div className="avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0f">
            <PrismicNextImage
            field={image}
            className="avatar-image h-full w-full object-fill"
            imgixParams={{q:90}}
              />
             </div>
        </div>
    )
}