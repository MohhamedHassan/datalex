export interface Footer {
        phone:string,
        sections: footerSections[],
        navbars: [
            {
                header: string,
                header_ar: string,
                navbar_items_container: [footer_navbar],
            }
        ],
        social_apps: social_Login[]
        copyright_ar:string,
        copyright:string
}
interface footerSections {
    image: {image:string},
    header: string,
    header_ar: string,
    content: string,
    content_ar: string,
    content_2: string,
    content_2_ar: string
}
interface footer_navbar        {
            navbar_items: ar_en[]
}
interface ar_en    {
    header: string,
    header_ar: string,
    link:string
}
interface social_Login {
    icon: string,
    url: string
    enabled: boolean
}