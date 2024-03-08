import { MainSection } from "./main-section";

export interface MainContainerWithHeader {
    title:string;
    header?:string;
    header_ar?:string;
    content: string;
    content_ar:string;
    content_2:string;
    content_2_ar:string;
    image:{image:string};
    sections:MainSection[];
    navbars:{navbar_items_container:any[]}

}
