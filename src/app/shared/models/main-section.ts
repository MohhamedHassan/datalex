export interface MainSection {
    id:number
    title:string;
    content:string ;
    content_2:string; 
    content_2_ar:string;
    content_ar:string;
    header:string;
    header_ar:string;
    image:{image:string};
    button: {
        text: string;
        text_ar: string;
        link:string
    },
}
