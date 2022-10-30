import logoWhite from './logo-white.png'
import { useMantineColorScheme, Image, } from '@mantine/core';


export default function LogoImage(props) {
    const { colorScheme } = useMantineColorScheme();
    const logoColor = colorScheme === "light" ? "100" : "0"

    return (
        <Image
        height={props.ht}
        width={props.wd}
        src={logoWhite}
        style={{filter: `invert(${logoColor}%)` }}
        />
    );
}