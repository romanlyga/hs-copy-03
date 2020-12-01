export default {
    "type": "document",
    "name": "config",
    "title": "Site Configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "baseURL",
            "title": "Base URL",
            "description": "Hostname (and path) to the root",
            "hidden": true,
            "validation": null
        },
        {
            "type": "object",
            "name": "params",
            "title": "Params",
            "description": "Site parameters",
            "validation": Rule => Rule.required(),
            "fields": [
                {
                    "type": "string",
                    "name": "description",
                    "title": "Site Description",
                    "description": "The default site description used in meta data.",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "color_scheme",
                    "title": "Color Scheme",
                    "description": "The color scheme used for the site.",
                    "initialValue": "light",
                    "validation": null,
                    "options": {
                        "list": [
                            "light",
                            "dark"
                        ]
                    }
                },
                {
                    "type": "string",
                    "name": "accent_color",
                    "title": "Accent Color",
                    "description": "The accent color of the site.",
                    "initialValue": "pink",
                    "validation": null,
                    "options": {
                        "list": [
                            "pink",
                            "green",
                            "blue",
                            "violet",
                            "yellow"
                        ]
                    }
                },
                {
                    "type": "header",
                    "name": "header",
                    "title": "Header Configuration",
                    "validation": null
                },
                {
                    "type": "footer",
                    "name": "footer",
                    "title": "Footer Configuration",
                    "validation": null
                }
            ]
        },
        {
            "type": "object",
            "name": "taxonomies",
            "title": "Taxonomies",
            "hidden": true,
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "stub",
                    "title": "Stub",
                    "hidden": false,
                    "validation": Rule => Rule.required(),
                    "options": {
                        "list": [
                            "stub"
                        ]
                    }
                }
            ]
        },
        {
            "type": "array",
            "name": "disableKinds",
            "title": "Disable Kinds",
            "description": "Enable disabling of all pages of the specified Kinds.",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ],
            "options": {
                "list": [
                    "page",
                    "home",
                    "section",
                    "taxonomy",
                    "taxonomyTerm",
                    "RSS",
                    "sitemap",
                    "robotsTXT",
                    "404"
                ]
            }
        },
        {
            "type": "boolean",
            "name": "uglyURLs",
            "title": "Ugly URLs",
            "description": "When enabled, creates URL of the form /filename.html instead of /filename/.",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config.yaml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}