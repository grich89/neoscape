export function templateFunctions() {
    let source = document.querySelector("#main").innerHTML;
    let template = Handlebars.compile(source);

    let data = {
        navItems: [
            {
                link: "#",
                label: "Home"
            },
            {
                link: "#properties",
                label: "Properties"
            }
        ],
        properties: [
            {
                address: "1900 Broadway",
                website: "#",
                landing: "#",
                image: {
                    src: "https://via.placeholder.com/350x200.png",
                    alt: "Placeholder property image"
                }
            },
            {
                address: "900 NY Avenue",
                website: "#",
                landing: "#",
                image: {
                    src: "https://via.placeholder.com/350x200.png",
                    alt: "Placeholder property image"
                }
            },
            {
                address: "Mansion on Madison",
                website: "#",
                landing: "#",
                image: {
                    src: "https://via.placeholder.com/350x200.png",
                    alt: "Placeholder property image"
                }
            },
            {
                address: "25 M",
                website: "#",
                landing: "#",
                image: {
                    src: "https://via.placeholder.com/350x200.png",
                    alt: "Placeholder property image"
                }
            },
            {
                address: "400 Park Ave South",
                website: "#",
                landing: "#",
                image: {
                    src: "https://via.placeholder.com/350x200.png",
                    alt: "Placeholder property image"
                }
            },
            {
                address: "Alexander Court",
                website: "#",
                landing: "#",
                image: {
                    src: "https://via.placeholder.com/350x200.png",
                    alt: "Placeholder property image"
                }
            },
            {
                address: "Ba Dai Toi",
                website: "#",
                landing: "#",
                image: {
                    src: "https://via.placeholder.com/350x200.png",
                    alt: "Placeholder property image"
                }
            },
            {
                address: "Centre 425",
                website: "#",
                landing: "#",
                image: {
                    src: "https://via.placeholder.com/350x200.png",
                    alt: "Placeholder property image"
                }
            },
            {
                address: "Clearfork",
                website: "#",
                landing: "#",
                image: {
                    src: "https://via.placeholder.com/350x200.png",
                    alt: "Placeholder property image"
                }
            },
            {
                address: "Memorial Design",
                website: "#",
                landing: "#",
                image: {
                    src: "https://via.placeholder.com/350x200.png",
                    alt: "Placeholder property image"
                }
            },
            {
                address: "One Legacy West",
                website: "#",
                landing: "#",
                image: {
                    src: "https://via.placeholder.com/350x200.png",
                    alt: "Placeholder property image"
                }
            },
            {
                address: "Project Jewel",
                website: "#",
                landing: "#",
                image: {
                    src: "https://via.placeholder.com/350x200.png",
                    alt: "Placeholder property image"
                }
            },
            {
                address: "Regalia",
                website: "#",
                landing: "#",
                image: {
                    src: "https://via.placeholder.com/350x200.png",
                    alt: "Placeholder property image"
                }
            }
        ],
        footerNavItems: [
            {
                link: "#",
                label: "Privacy Policy"
            },
            {
                link: "#",
                label: "Terms of use"
            }
        ]
    };

    let HTML = template(data);
    document.querySelector('#content').innerHTML += HTML;
}