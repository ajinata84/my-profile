import { createGlobalStyle } from "styled-components";
import OpenSansRegular from "../assets/fonts/OpenSans-Regular.ttf";
import OpenSansSemiBold from "../assets/fonts/OpenSans-SemiBold.ttf";
import OpenSansBold from "../assets/fonts/OpenSans-Bold.ttf";
import AndikaRegular from "../assets/fonts/Andika-Regular.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'OpenSans Regular';
    src: url(${OpenSansRegular});
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans SemiBold';
    src: url(${OpenSansSemiBold});
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans Bold';
    src: url(${OpenSansBold});
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans Regular';
    src: url(${OpenSansRegular});
    font-style: normal;
  }

  @font-face {
    font-family: 'Andika Regular';
    src: url(${AndikaRegular});
    font-style: normal;
  }

  html{
    font-family: 'OpenSans Regular';
  }
  *{
    font-family: 'OpenSans Regular';
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'OpenSans SemiBold'
  }
`;

export default Typography;
