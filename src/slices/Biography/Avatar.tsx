import { ImageField } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next";



type AvatarProps = {
    image : ImageField;
    classNmae?: string;
}

export default function Avatar({
    image, className
}: AvatarProps){

    return(
        <div>
            <div>
            <PrismicNextImage
            field={image}
            className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
          />

            </div>
        </div>
    )
}