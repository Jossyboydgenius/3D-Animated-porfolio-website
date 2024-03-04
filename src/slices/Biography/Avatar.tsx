import { ImageField } from "@prismicio/client"



type AvatarProps = {
    image : ImageField;
    classNmae?: string;
}

export default function Avatar({
    image, classNmae
})