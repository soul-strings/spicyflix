const request = require('request');
const { EmbedBuilder,
    PermissionsBitField,
    ApplicationCommandOptionType,
    ButtonStyle,
    ActionRowBuilder,
    ButtonBuilder,
    AttachmentBuilder } = require("discord.js");

const { request_site } = require("../others/one_requester")
const { PornHub } = require('pornhub.js')
const { defaultNSFW } = require("../defaultNsfwEmbed")
const { defaulterloading } = require("../defultErloading")
const { defershow } = require("../defaultErrshow")
require("dotenv").config();
module.exports = {
    sleep: async function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    homemade_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://pin.porn/api/videoInfo/?tag_id=327/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].link)
                        .setName('SpicyFlix.mp4')

                    const arryTags = body.data[0].tags
                    const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                    const embed = new EmbedBuilder()
                        .setDescription(body.data[0].title)
                        .setColor(client.color)
                    try {
                        interaction.editReply({
                            content: "**🔥️ Homemade Porn**",
                            embeds: [embed],
                            files: [FileSender]
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    homemade_hotscop: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })

            } else {
                request({
                    uri: `https://api.hotscope.tv/videos/search?search=homemade&page=1`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {
                    const randomIndex = Math.floor(Math.random() * body.length);
                    const randomId = body[randomIndex].id;

                    const new_url = `https://api.hotscope.tv/videos/video/${randomId}`;
                    const new_headers = {
                        'User-Agent': process.env.pinporn_agent,

                    };

                    const new_options = {
                        json: true,
                        jsonReplacer: true,
                        url: new_url,
                        headers: new_headers
                    };


                    request(new_options, async (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            try {
                                const file = new AttachmentBuilder()
                                    .setFile(body.video)
                                    .setName("SpicyFlix.mp4")

                                const embed = new EmbedBuilder()
                                    .setDescription(`${body.title}`)
                                    .setColor(client.color)

                                try {
                                    await interaction.editReply({ embeds: [embed], files: [file] })
                                } catch (e) {
                                    interaction.editReply({
                                        embeds: [defaulterloading(interaction)],
                                        content: ""
                                    })
                                }


                            } catch (e) {
                                console.log(e)
                            }

                        } else {
                            console.error('Error:', error);
                            console.log('Response status code:', response.statusCode);
                        }
                    });

                })
            }
        })
    },

    lesbian_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://pin.porn/api/videoInfo/?tag_id=19/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].link)
                        .setName('SpicyFlix.mp4')

                    const arryTags = body.data[0].tags
                    const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                    const embed = new EmbedBuilder()
                        .setDescription(body.data[0].title)
                        .setColor(client.color)
                    try {
                        interaction.editReply({
                            content: "**🔥️ Lesbian Porn**",
                            embeds: [embed],
                            files: [FileSender]
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },


    lesbian_hotscop: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://api.hotscope.tv/videos/search?search=lesbian&page=${Math.floor(Math.random() * 10) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {
                    const randomIndex = Math.floor(Math.random() * body.length);
                    const randomId = body[randomIndex].id;

                    const new_url = `https://api.hotscope.tv/videos/video/${randomId}`;
                    const new_headers = {
                        'User-Agent': process.env.pinporn_agent,

                    };

                    const new_options = {
                        json: true,
                        jsonReplacer: true,
                        url: new_url,
                        headers: new_headers
                    };


                    request(new_options, async (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            try {
                                const file = new AttachmentBuilder()
                                    .setFile(body.video)
                                    .setName("SpicyFlix.mp4")

                                const embed = new EmbedBuilder()
                                    .setDescription(`${body.title}`)
                                    .setColor(client.color)

                                try {
                                    await interaction.editReply({ embeds: [embed], files: [file] })
                                } catch (e) {
                                    interaction.editReply({
                                        embeds: [defaulterloading(interaction)],
                                        content: ""
                                    })
                                }


                            } catch (e) {
                                console.log(e)
                            }

                        } else {
                            console.error('Error:', error);
                            console.log('Response status code:', response.statusCode);
                        }
                    });

                })
            }
        })
    },

    milf_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://pin.porn/api/videoInfo/?tag_id=25/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].link)
                        .setName('SpicyFlix.mp4')

                    const arryTags = body.data[0].tags
                    const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                    const embed = new EmbedBuilder()
                        .setDescription(body.data[0].title)
                        .setColor(client.color)
                    try {
                        interaction.editReply({
                            content: "**🔥️ Milf Porn**",
                            embeds: [embed],
                            files: [FileSender]
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },


    milf_hotscop: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://api.hotscope.tv/videos/search?search=milf&page=${Math.floor(Math.random() * 7) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {
                    const randomIndex = Math.floor(Math.random() * body.length);
                    const randomId = body[randomIndex].id;

                    const new_url = `https://api.hotscope.tv/videos/video/${randomId}`;
                    const new_headers = {
                        "User-Agent": process.env.pinporn_agent,

                    };

                    const new_options = {
                        json: true,
                        jsonReplacer: true,
                        url: new_url,
                        headers: new_headers
                    };


                    request(new_options, async (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            try {
                                const file = new AttachmentBuilder()
                                    .setFile(body.video)
                                    .setName("SpicyFlix.mp4")

                                const embed = new EmbedBuilder()
                                    .setDescription(`${body.title}`)
                                    .setColor(client.color)

                                try {
                                    await interaction.editReply({ embeds: [embed], files: [file] })
                                } catch (e) {
                                    interaction.editReply({
                                        embeds: [defaulterloading(interaction)],
                                        content: ""
                                    })
                                }


                            } catch (e) {
                                console.log(e)
                            }

                        } else {
                            console.error('Error:', error);
                            console.log('Response status code:', response.statusCode);
                        }
                    });

                })
            }
        })
    },



    onlyfans_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://pin.porn/api/videoInfo/?tag_id=214/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].link)
                        .setName('SpicyFlix.mp4')

                    const arryTags = body.data[0].tags
                    const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                    const embed = new EmbedBuilder()
                        .setDescription(body.data[0].title)
                        .setColor(client.color)
                    try {
                        interaction.editReply({
                            content: "**🔥️ Onlyfans Porn**",
                            embeds: [embed],
                            files: [FileSender]
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },


    onlyfans_hotscop: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://api.hotscope.tv/videos/group?group=onlyfans&page=${Math.floor(Math.random() * 3) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {
                    const randomIndex = Math.floor(Math.random() * body.length);
                    const randomId = body[randomIndex].id;

                    const new_url = `https://api.hotscope.tv/videos/video/${randomId}`;
                    const new_headers = {
                        "User-Agent": process.env.pinporn_agent,

                    };

                    const new_options = {
                        json: true,
                        jsonReplacer: true,
                        url: new_url,
                        headers: new_headers
                    };


                    request(new_options, async (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            try {
                                const file = new AttachmentBuilder()
                                    .setFile(body.video)
                                    .setName("SpicyFlix.mp4")

                                const embed = new EmbedBuilder()
                                    .setDescription(`${body.title}`)
                                    .setColor(client.color)

                                try {
                                    await interaction.editReply({ embeds: [embed], files: [file] })
                                } catch (e) {
                                    interaction.editReply({
                                        embeds: [defaulterloading(interaction)],
                                        content: ""
                                    })
                                }


                            } catch (e) {
                                console.log(e)
                            }

                        } else {
                            console.error('Error:', error);
                            console.log('Response status code:', response.statusCode);
                        }
                    });

                })
            }
        })
    },


    porn_hotscop: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://api.hotscope.tv/videos/group?group=other&page=${Math.floor(Math.random() * 20) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {
                    const randomIndex = Math.floor(Math.random() * body.length);
                    const randomId = body[randomIndex].id;

                    const new_url = `https://api.hotscope.tv/videos/video/${randomId}`;
                    const new_headers = {
                        "User-Agent": process.env.pinporn_agent,

                    };

                    const new_options = {
                        json: true,
                        jsonReplacer: true,
                        url: new_url,
                        headers: new_headers
                    };


                    request(new_options, async (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            try {
                                const file = new AttachmentBuilder()
                                    .setFile(body.video)
                                    .setName("SpicyFlix.mp4")

                                const embed = new EmbedBuilder()
                                    .setDescription(`${body.title}`)
                                    .setColor(client.color)

                                try {
                                    await interaction.editReply({ embeds: [embed], files: [file] })
                                } catch (e) {
                                    interaction.editReply({
                                        embeds: [defaulterloading(interaction)],
                                        content: ""
                                    })
                                }


                            } catch (e) {
                                console.log(e)
                            }

                        } else {
                            console.error('Error:', error);
                            console.log('Response status code:', response.statusCode);
                        }
                    });

                })
            }
        })
    },

    tiktok_hotscop: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://api.hotscope.tv/videos/search?search=tiktok&page=1`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {
                    const randomIndex = Math.floor(Math.random() * body.length);
                    const randomId = body[randomIndex].id;

                    const new_url = `https://api.hotscope.tv/videos/video/${randomId}`;
                    const new_headers = {
                        "User-Agent": process.env.pinporn_agent,

                    };

                    const new_options = {
                        json: true,
                        jsonReplacer: true,
                        url: new_url,
                        headers: new_headers
                    };


                    request(new_options, async (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            try {
                                const file = new AttachmentBuilder()
                                    .setFile(body.video)
                                    .setName("SpicyFlix.mp4")

                                const embed = new EmbedBuilder()
                                    .setDescription(`${body.title}`)
                                    .setColor(client.color)

                                try {
                                    await interaction.editReply({ embeds: [embed], files: [file] })
                                } catch (e) {
                                    interaction.editReply({
                                        embeds: [defaulterloading(interaction)],
                                        content: ""
                                    })
                                }


                            } catch (e) {
                                console.log(e)
                            }

                        } else {
                            console.error('Error:', error);
                            console.log('Response status code:', response.statusCode);
                        }
                    });

                })
            }
        })
    },

    tiktok_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://pin.porn/api/videoInfo/?tag_id=226/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].link)
                        .setName('SpicyFlix.mp4')

                    const arryTags = body.data[0].tags
                    const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                    const embed = new EmbedBuilder()
                        .setDescription(body.data[0].title)
                        .setColor(client.color)
                    try {
                        interaction.editReply({
                            content: "**🔥️ Nsfw TikTok**",
                            embeds: [embed],
                            files: [FileSender]
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },


    tiktok_tikporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://api.tik.porn/api/video/getrecommendation`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {
                    const StandarnPornResponseText = body.data[0].video_text.meta_title.default.text.length > 20 ? body.data[0].video_text.meta_title.default.text.slice(0, 20) + "..." : body.data[0].video_text.meta_title.default.text;
                    const embed = new EmbedBuilder()
                        .setDescription(`${StandarnPornResponseText}`)
                        .setColor(client.color)

                    //          const fileImage = new AttachmentBuilder()
                    //             .setFile(body.data[0].thumbnail_url)
                    //            .setName('SpicyFlix.png')

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].fileurl)
                        .setName('SpicyFlix.mp4')
                    try {
                        interaction.editReply({
                            content: "**🔥️ Nsfw TikTok**",
                            embeds: [embed],
                            files: [FileSender]
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },


    tiktok_onlytik: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    method: 'POST',
                    uri: `https://onlytik.com/api/new-videos`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    },
                    body: {
                        limit: 10,
                    },
                }, async function (err, response, body) {
                    const MapTheAPi = Math.floor(Math.random() * body.length);
                    const randomUrl = body[MapTheAPi].url;
                    const randomLikes = body[MapTheAPi].likes;

                    //     const embed = new EmbedBuilder()
                    //          .setDescription(`👍 ${randomLikes}`)
                    //           .setColor(client.color)

                    const FileSender = new AttachmentBuilder()
                        .setFile(randomUrl)
                        .setName('FpicyFlix.mp4')
                    try {
                        interaction.editReply({
                            content: "**🔥️ Nsfw TikTok**",
                            files: [FileSender],
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    tiktok_tube: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                let RadnomMaximumuAccordingToSitePage = Math.floor(Math.random() * 70) + 1;
                request({
                    uri: `https://tikporn.tube/api/videos2.php?params=3600/str/relevance/${RadnomMaximumuAccordingToSitePage}/search..1.all..&s=tiktok`,
                    json: true,
                    jsonReplacer: true,

                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {
                    if (!err | response.statusCode === 200) {
                        const videos = body.videos;
                        const randomIndex = Math.floor(Math.random() * videos.length);
                        const randomVideo = videos[randomIndex];
                        const randomVideoId = randomVideo.video_id;
                        //  console.log(randomVideoId);
                        const videoLink = `https://v.tikporn.tube/videos/${randomVideoId}.mp4`

                        const file = new AttachmentBuilder()
                            .setFile(videoLink)
                            .setName("SpicyFlix.mp4")

                        const embed = new EmbedBuilder()
                            .setDescription(randomVideo.title || "dont have")
                            .setColor(client.color)
                        try {
                            interaction.editReply({
                                content: "**🔥️ Nsfw TikTok**",
                                files: [file],
                                embeds: [embed]
                            })
                        } catch (e) {
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    }
                })
            }
        })
    },


    tiktok_figfat: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                let shet = Math.floor(Math.random() * 30) + 1;
                let skipp = Math.floor(Math.random() * 4) + 1;
                const requestData = {
                    a: 'discover',
                    skip: skipp,
                    limit: shet,
                    id: 0,
                    sort: 1,
                    author: '',
                    discover: 'tiktok',
                    category: ''
                };

                request({
                    uri: `https://fiqfuq.com/api`,
                    json: true,
                    method: 'POST',
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    },
                    body: requestData
                }, async function (err, response, body) {
                    if (!err | response.statusCode === 200) {
                        console.log(body)
                        const randomItem = body[Math.floor(Math.random() * body.length)];
                        const videoUrl = randomItem.video_url; // Assuming it's initially a video URL
                        const thumbnailUrl = randomItem.thumbnail;
                        const desc = randomItem.description;

                        let file;
                        if (videoUrl.endsWith(".mp4")) {
                            file = new AttachmentBuilder()
                                .setFile(videoUrl)
                                .setName("SpicyFlix.mp4");
                        } else if (videoUrl.endsWith(".jpg") || videoUrl.endsWith(".jpeg") || videoUrl.endsWith(".png")) {
                            file = new AttachmentBuilder()
                                .setFile(videoUrl)
                                .setName("SpicyFlix.jpg");
                        } else {
                            console.log("Invalid file format.");
                        }

                        const embed = new EmbedBuilder()
                            .setDescription(desc || "don't have")
                            .setColor(client.color);
                        try {
                            interaction.editReply({
                                content: "**🔥️ Nsfw TikTok**",
                                embeds: [embed],
                                files: file ? [file] : []
                            });
                        } catch (e) {
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    }
                })
            }
        })
    },

    neko_4k: async function (interaction, client) {
        interaction.deferReply().then(async () => {

            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                try {
                    let response = await fetch(`https://nekobot.xyz/api/image?type=4k`).then(r => r.json());

                    const file = new AttachmentBuilder(`${response.message}`)
                        .setName('SpicyFlix.png')

                    const get = new EmbedBuilder()
                        .setTitle('4k Photo')
                        .setImage('attachment://SpicyFlix.png')
                        .setColor(client.color);

                    interaction.editReply({
                        embeds: [get],
                        files: [file],
                    })

                } catch (err) {
                    console.log(err);
                    const support = client.support_server
                    const apioff = new EmbedBuilder()
                        .setDescription(`Oops! the api is off\n\n[Support Server](${client.support})`)
                        .setColor(client.color)
                    interaction.editReply({
                        embeds: [apioff]
                    })
                }
            }
        })
    },

    neko_anal: async function (interaction, client) {
        interaction.deferReply().then(async () => {

            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                try {
                    let response = await fetch(`https://nekobot.xyz/api/image?type=anal`).then(r => r.json());

                    const imageUrl = response.message;
                    let resptype = '';
                    if (imageUrl.endsWith('.gif')) {
                        resptype = 'gif';
                    } else if (imageUrl.endsWith('.jpg')) {
                        resptype = 'png';
                    } else {
                        resptype = 'png'
                    }

                    const file = new AttachmentBuilder(imageUrl)
                        .setName(`SpicyFlix.${resptype}`);

                    const get = new EmbedBuilder()
                        .setTitle('Anal Nude')
                        .setImage(`attachment://SpicyFlix.${resptype}`)
                        .setColor(client.color);

                    interaction.editReply({
                        embeds: [get],
                        files: [file],
                    })

                } catch (err) {
                    console.log(err);
                    const support = client.support_server
                    const apioff = new EmbedBuilder()
                        .setDescription(`Oops! the api is off\n\n[Support Server](${client.support})`)
                        .setColor(client.color)
                    interaction.editReply({
                        embeds: [apioff]
                    })
                }
            }
        })
    },

    neko_paizuri: async function (interaction, client) {
        interaction.deferReply().then(async () => {

            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                try {
                    let response = await fetch(`https://nekobot.xyz/api/image?type=paizuri`).then(r => r.json());

                    const file = new AttachmentBuilder(`${response.message}`)
                        .setName('SpicyFlix.png')

                    const get = new EmbedBuilder()
                        .setTitle('Paizuri Nude')
                        .setImage('attachment://SpicyFlix.png')
                        .setColor(client.color);

                    interaction.editReply({
                        embeds: [get],
                        files: [file],
                    })

                } catch (err) {
                    console.log(err);
                    const support = client.support_server
                    const apioff = new EmbedBuilder()
                        .setDescription(`Oops! the api is off\n\n[Support Server](${client.support})`)
                        .setColor(client.color)
                    interaction.editReply({
                        embeds: [apioff]
                    })
                }
            }
        })
    },

    neko_tentacle: async function (interaction, client) {
        interaction.deferReply().then(async () => {

            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                try {
                    let response = await fetch(`https://nekobot.xyz/api/image?type=tentacle`).then(r => r.json());

                    const file = new AttachmentBuilder(`${response.message}`)
                        .setName('SpicyFlix.png')

                    const get = new EmbedBuilder()
                        .setTitle('Tentacle Nude')
                        .setImage('attachment://SpicyFlix.png')
                        .setColor(client.color);

                    interaction.editReply({
                        embeds: [get],
                        files: [file],
                    })

                } catch (err) {
                    console.log(err);
                    const support = client.support_server
                    const apioff = new EmbedBuilder()
                        .setDescription(`Oops! the api is off\n\n[Support Server](${client.support})`)
                        .setColor(client.color)
                    interaction.editReply({
                        embeds: [apioff]
                    })
                }
            }
        })
    },

    neko_yaoi: async function (interaction, client) {
        interaction.deferReply().then(async () => {

            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                try {
                    let response = await fetch(`https://nekobot.xyz/api/image?type=yaoi`).then(r => r.json());

                    const file = new AttachmentBuilder(`${response.message}`)
                        .setName('SpicyFlix.png')

                    const get = new EmbedBuilder()
                        .setTitle('Yaoi Nude')
                        .setImage('attachment://SpicyFlix.png')
                        .setColor(client.color);

                    interaction.editReply({
                        embeds: [get],
                        files: [file],
                    })

                } catch (err) {
                    console.log(err);
                    const support = client.support_server
                    const apioff = new EmbedBuilder()
                        .setDescription(`Oops! the api is off\n\n[Support Server](${client.support})`)
                        .setColor(client.color)
                    interaction.editReply({
                        embeds: [apioff]
                    })
                }
            }
        })
    },


    anal_hotscop: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://api.hotscope.tv/videos/search?search=anal&page=${Math.floor(Math.random() * 10) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {
                    const randomIndex = Math.floor(Math.random() * body.length);
                    const randomId = body[randomIndex].id;

                    const new_url = `https://api.hotscope.tv/videos/video/${randomId}`;
                    const new_headers = {
                        "User-Agent": process.env.pinporn_agent,

                    };

                    const new_options = {
                        json: true,
                        jsonReplacer: true,
                        url: new_url,
                        headers: new_headers
                    };


                    request(new_options, async (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            try {
                                const file = new AttachmentBuilder()
                                    .setFile(body.video)
                                    .setName("SpicyFlix.mp4")

                                const embed = new EmbedBuilder()
                                    .setDescription(`${body.title}`)
                                    .setColor(client.color)

                                try {
                                    await interaction.editReply({ embeds: [embed], files: [file] })
                                } catch (e) {
                                    interaction.editReply({
                                        embeds: [defaulterloading(interaction)],
                                        content: ""
                                    })
                                }


                            } catch (e) {
                                console.log(e)
                            }

                        } else {
                            console.error('Error:', error);
                            console.log('Response status code:', response.statusCode);
                        }
                    });

                })
            }
        })
    },


    anal_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://pin.porn/api/videoInfo/?tag_id=7/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].link)
                        .setName('SpicyFlix.mp4')

                    const arryTags = body.data[0].tags
                    const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                    const embed = new EmbedBuilder()
                        .setDescription(body.data[0].title)
                        .setColor(client.color)
                    try {
                        interaction.editReply({
                            content: "**🔥️ Anal Porn**",
                            embeds: [embed],
                            files: [FileSender]
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    asian_hotscop: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://api.hotscope.tv/videos/search?search=asian&page=${Math.floor(Math.random() * 6) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {
                    const randomIndex = Math.floor(Math.random() * body.length);
                    const randomId = body[randomIndex].id;

                    const new_url = `https://api.hotscope.tv/videos/video/${randomId}`;
                    const new_headers = {
                        "User-Agent": process.env.pinporn_agent,

                    };

                    const new_options = {
                        json: true,
                        jsonReplacer: true,
                        url: new_url,
                        headers: new_headers
                    };


                    request(new_options, async (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            try {
                                const file = new AttachmentBuilder()
                                    .setFile(body.video)
                                    .setName("SpicyFlix.mp4")

                                const embed = new EmbedBuilder()
                                    .setDescription(`${body.title}`)
                                    .setColor(client.color)

                                try {
                                    await interaction.editReply({ embeds: [embed], files: [file] })
                                } catch (e) {
                                    interaction.editReply({
                                        embeds: [defaulterloading(interaction)],
                                        content: ""
                                    })
                                }


                            } catch (e) {
                                console.log(e)
                            }

                        } else {
                            console.error('Error:', error);
                            console.log('Response status code:', response.statusCode);
                        }
                    });

                })
            }
        })
    },


    asian_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://pin.porn/api/videoInfo/?tag_id=32/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].link)
                        .setName('SpicyFlix.mp4')

                    const arryTags = body.data[0].tags
                    const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                    const embed = new EmbedBuilder()
                        .setDescription(body.data[0].title)
                        .setColor(client.color)

                    try {
                        interaction.editReply({
                            content: "**🔥️ Asian Porn**",
                            embeds: [embed],
                            files: [FileSender]
                        })

                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },


    boobs_hotscop: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://api.hotscope.tv/videos/search?search=boobs&page=${Math.floor(Math.random() * 15) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {
                    const randomIndex = Math.floor(Math.random() * body.length);
                    const randomId = body[randomIndex].id;

                    const new_url = `https://api.hotscope.tv/videos/video/${randomId}`;
                    const new_headers = {
                        "User-Agent": process.env.pinporn_agent,

                    };

                    const new_options = {
                        json: true,
                        jsonReplacer: true,
                        url: new_url,
                        headers: new_headers
                    };


                    request(new_options, async (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            try {
                                const file = new AttachmentBuilder()
                                    .setFile(body.video)
                                    .setName("SpicyFlix.mp4")

                                const embed = new EmbedBuilder()
                                    .setDescription(`${body.title}`)
                                    .setColor(client.color)

                                try {
                                    await interaction.editReply({ embeds: [embed], files: [file] })
                                } catch (e) {
                                    interaction.editReply({
                                        embeds: [defaulterloading(interaction)],
                                        content: ""
                                    })
                                }


                            } catch (e) {
                                console.log(e)
                            }

                        } else {
                            console.error('Error:', error);
                            console.log('Response status code:', response.statusCode);
                        }
                    });

                })
            }
        })
    },


    boobs_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://pin.porn/api/videoInfo/?tag_id=201/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].link)
                        .setName('SpicyFlix.mp4')

                    const arryTags = body.data[0].tags
                    const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                    const embed = new EmbedBuilder()
                        .setDescription(body.data[0].title)
                        .setColor(client.color)
                    try {
                        interaction.editReply({
                            content: "**🔥️ Boobs Porn**",
                            embeds: [embed],
                            files: [FileSender]
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },


    gay_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://pin.porn/api/videoInfo/?tag_id=560/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].link)
                        .setName('SpicyFlix.mp4')

                    const arryTags = body.data[0].tags
                    const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                    const embed = new EmbedBuilder()
                        .setDescription(body.data[0].title)
                        .setColor(client.color)
                    try {
                        interaction.editReply({
                            content: "**🔥️ Gay Porn**",
                            embeds: [embed],
                            files: [FileSender]
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },


    porn_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 45) + 1;
                const page = Math.floor(Math.random() * 20) + 1;
                request({
                    uri: `https://pin.porn/api/videoInfo/?tag_id=${[535, 58, 270, 25, 14, 201, 7][Math.floor(Math.random() * 7)]}/&ipp=${randomNumber}&from_page=${page}`,
                    // https://pin.porn/api/videoInfo/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].link)
                        .setName('SpicyFlix.mp4')

                    const arryTags = body.data[0].tags
                    const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                    const embed = new EmbedBuilder()
                        .setDescription(body.data[0].title)
                        .setColor(client.color)
                    try {
                        interaction.editReply({
                            content: "**🔥️ Random Porn**",
                            embeds: [embed],
                            files: [FileSender]
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    cuckold_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://pin.porn/api/videoInfo/?tag_id=592/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].link)
                        .setName('SpicyFlix.mp4')

                    const arryTags = body.data[0].tags
                    const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                    const embed = new EmbedBuilder()
                        .setDescription(body.data[0].title)
                        .setColor(client.color)
                    try {
                        interaction.editReply({
                            content: "**🔥️ Cuckold Porn**",
                            embeds: [embed],
                            files: [FileSender]
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },


    blowjob_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://pin.porn/api/videoInfo/?tag_id=14/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].link)
                        .setName('SpicyFlix.mp4')

                    const arryTags = body.data[0].tags
                    const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                    const embed = new EmbedBuilder()
                        .setDescription(body.data[0].title)
                        .setColor(client.color)
                    try {
                        interaction.editReply({
                            content: "**🔥️ Blowjob Porn**",
                            embeds: [embed],
                            files: [FileSender]
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    eboy_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                request({
                    uri: `https://pin.porn/api/videoInfo/?tag_id=12/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        "User-Agent": process.env.pinporn_agent,
                    }
                }, async function (err, response, body) {

                    const FileSender = new AttachmentBuilder()
                        .setFile(body.data[0].link)
                        .setName('SpicyFlix.mp4')

                    const arryTags = body.data[0].tags
                    const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                    const embed = new EmbedBuilder()
                        .setDescription(body.data[0].title)
                        .setColor(client.color)
                    try {
                        interaction.editReply({
                            content: "**🔥️ Eboy Porn**",
                            embeds: [embed],
                            files: [FileSender]
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    neko_nekoa: async function (interaction, client) {
        interaction.deferReply().then(async () => {

            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                try {
                    let response = await fetch(`https://nekobot.xyz/api/image?type=neko`).then(r => r.json());

                    const file = new AttachmentBuilder(`${response.message}`)
                        .setName('SpicyFlix.png')

                    const get = new EmbedBuilder()
                        .setTitle('Neko Nude')
                        .setImage('attachment://SpicyFlix.png')
                        .setColor(client.color);

                    interaction.editReply({
                        embeds: [get],
                        files: [file],
                    })

                } catch (err) {
                    console.log(err);
                    const support = client.support_server
                    const apioff = new EmbedBuilder()
                        .setDescription(`Oops! the api is off\n\n[Support Server](${client.support})`)
                        .setColor(client.color)
                    interaction.editReply({
                        embeds: [apioff]
                    })
                }
            }
        })
    },



    porn_saved: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            var { video } = require('../../videos.json')

            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                try {
                    var content = `${video[Math.floor(Math.random() * video.length)]}`

                    interaction.editReply({
                        content: `**🔥️ Random Porn**\n*If content dose not open please use the command again* [⠀](${content})`
                    })

                } catch (err) {
                    console.log(err);
                    const support = client.support_server
                    const apioff = new EmbedBuilder()
                        .setDescription(`Oops! the api is off\n\n[Support Server](${client.support})`)
                        .setColor(client.color)
                    interaction.editReply({
                        embeds: [apioff]
                    })
                }
            }
        })
    },


    pornhub_searcher: async function (interaction, client, searcherstring) {
        interaction.deferReply().then(async () => {
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                try {
                    const pornhub = new PornHub()
                    const randomPage = Math.floor(Math.random() * 10) + 1;
                    const res = await pornhub.searchVideo(searcherstring, {
                        page: randomPage,
                        production: 'professional',
                        durationMin: 10,
                        durationMax: 30
                    })

                    const getRandomItem = (data) => {
                        const randomIndex = Math.floor(Math.random() * data.length);
                        return data[randomIndex];
                    };
                    const randomItem = getRandomItem(res.data);

                    const file = new AttachmentBuilder(randomItem.preview)
                        .setName('SpicyFlix.png')

                    const embed = new EmbedBuilder()
                        .setTitle(`${randomItem.title}`)
                    embed.addFields([
                        // { name: "Video Link", value: `[Here](${randomItem.url})`, inline: true },
                        { name: "Views", value: `${randomItem.views}`, inline: true },
                        { name: "Duration", value: `${randomItem.duration}`, inline: true },
                        { name: "HD video ?", value: `${randomItem.hd}`, inline: true },
                        { name: "Premium video ?", value: `${randomItem.premium}`, inline: true },
                    ])
                        .setDescription(`[Click here to watch this video](${randomItem.url})`)
                        .setColor(client.color)
                        .setImage('attachment://SpicyFlix.png')

                    const butex = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId(`more-${searcherstring}`)
                                .setLabel('More Videos')
                                .setStyle(ButtonStyle.Secondary)
                        )

                    interaction.editReply({
                        embeds: [embed],
                        files: [file],
                        content: "",
                        components: [butex]
                    })

                    const filter = i => i.customId === `more-${searcherstring}`

                    const collector = interaction.channel.createMessageComponentCollector({
                        filter,
                        time: 60000 * 5
                    });

                    collector.on('collect', async i => {
                        if (i.message.interaction.user.id !== interaction.user.id) {
                            return;
                        }
                        const pornhub = new PornHub()
                        const randomPage = Math.floor(Math.random() * 10) + 1;
                        const res = await pornhub.searchVideo(searcherstring, {
                            page: randomPage,
                            production: 'professional',
                            durationMin: 10,
                            durationMax: 30
                        })

                        const getRandomItem = (data) => {
                            const randomIndex = Math.floor(Math.random() * data.length);
                            return data[randomIndex];
                        };
                        const randomItem = getRandomItem(res.data);

                        const file = new AttachmentBuilder(randomItem.preview)
                            .setName('SpicyFlix.png')

                        const embed = new EmbedBuilder()
                            .setTitle(`${randomItem.title}`)
                        embed.addFields([
                            // { name: "Video Link", value: `[Here](${randomItem.url})`, inline: true },
                            { name: "Views", value: `${randomItem.views}`, inline: true },
                            { name: "Duration", value: `${randomItem.duration}`, inline: true },
                            { name: "HD video ?", value: `${randomItem.hd}`, inline: true },
                            { name: "Premium video ?", value: `${randomItem.premium}`, inline: true },
                        ])
                            .setDescription(`[Click here to watch this video](${randomItem.url})`)
                            .setColor(client.color)
                            .setImage('attachment://SpicyFlix.png')

                        await i.update({
                            embeds: [embed],
                            files: [file],
                            content: "",
                            components: [butex],
                            fetchReply: true
                        })

                    })

                    collector.on('end', async (collected, reason) => { //time out
                        if (reason === 'time') {

                            const shetbtn = new ActionRowBuilder()
                                .addComponents(
                                    new ButtonBuilder()
                                        .setCustomId('more')
                                        .setLabel('More Videos')
                                        .setStyle(ButtonStyle.Secondary)
                                        .setDisabled(true),
                                )

                            interaction.editReply({ components: [shetbtn], content: "" })
                        }
                    });
                } catch (e) {
                    console.log(e)

                    const apioff = new EmbedBuilder()
                        .setDescription(`search something diffrent ! if your problem dosnt solved please contact [support](${client.support}) to get support about this error`)
                        .setColor(client.color)

                    interaction.editReply({
                        embeds: [apioff],
                        files: [],
                        content: "",
                        ephemeral: true
                    })
                }

            }
        })
    },


    tiktok_fiqfuq: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const bodyData = {
                    "a": "discover",
                    "skip": Math.floor(Math.random() * 10) + 1,
                    "limit": 12,
                    "id": 0,
                    "sort": 1,
                    "author": "",
                    "discover": "tiktok",
                    "category": '',
                    "filter": "videos"
                };
                request({
                    uri: `https://fiqfuq.com/api`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        'User-Agent': `${process.env.USERAGENT}`,
                    },
                    body: bodyData
                }, async function (err, response, body) {

                    const ran = Math.floor(Math.random() * body.length);
                    const files = new AttachmentBuilder(body[ran].video_url, 'SpicyFlix.mp4')
                    await interaction.editReply({ content: `${body[ran].description || "none"}\n\nloading content...` })

                    try {
                        await interaction.editReply({
                            files: [files], content: `**🔥️ Nsfw TikTok**\n${body[ran].description || "none"}`
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    anal_fiqfuq: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const bodyData = {
                    "a": "discover",
                    "skip": Math.floor(Math.random() * 10) + 1,
                    "limit": 12,
                    "id": 0,
                    "sort": 1,
                    "author": "",
                    "discover": "anal",
                    "category": '',
                    "filter": "videos"
                };
                request({
                    uri: `https://fiqfuq.com/api`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        'User-Agent': `${process.env.USERAGENT}`,
                    },
                    body: bodyData
                }, async function (err, response, body) {

                    const ran = Math.floor(Math.random() * body.length);
                    const files = new AttachmentBuilder(body[ran].video_url, 'SpicyFlix.mp4')
                    await interaction.editReply({ content: `${body[ran].description || "none"}\n\nloading content...` })

                    try {
                        await interaction.editReply({
                            files: [files], content: `**🔥️ Nsfw Anal**\n${body[ran].description || "none"}`
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    asian_fiqfuq: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const bodyData = {
                    "a": "discover",
                    "skip": Math.floor(Math.random() * 10) + 1,
                    "limit": 12,
                    "id": 0,
                    "sort": 1,
                    "author": "",
                    "discover": "asian",
                    "category": '',
                    "filter": "videos"
                };
                request({
                    uri: `https://fiqfuq.com/api`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        'User-Agent': `${process.env.USERAGENT}`,
                    },
                    body: bodyData
                }, async function (err, response, body) {

                    const ran = Math.floor(Math.random() * body.length);
                    const files = new AttachmentBuilder(body[ran].video_url, 'SpicyFlix.mp4')
                    await interaction.editReply({ content: `${body[ran].description || "none"}\n\nloading content...` })

                    try {
                        await interaction.editReply({
                            files: [files], content: `**🔥️ Nsfw Asian**\n${body[ran].description || "none"}`
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    boobs_fiqfuq: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const bodyData = {
                    "a": "discover",
                    "skip": Math.floor(Math.random() * 10) + 1,
                    "limit": 12,
                    "id": 0,
                    "sort": 1,
                    "author": "",
                    "discover": "boobs",
                    "category": '',
                    "filter": "videos"
                };
                request({
                    uri: `https://fiqfuq.com/api`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        'User-Agent': `${process.env.USERAGENT}`,
                    },
                    body: bodyData
                }, async function (err, response, body) {

                    const ran = Math.floor(Math.random() * body.length);
                    const files = new AttachmentBuilder(body[ran].video_url, 'SpicyFlix.mp4')
                    await interaction.editReply({ content: `${body[ran].description || "none"}\n\nloading content...` })

                    try {
                        await interaction.editReply({
                            files: [files], content: `**🔥️ Nsfw Boobs**\n${body[ran].description || "none"}`
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    porn_fiqfuq: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const bodyData = {
                    "a": "discover",
                    "skip": Math.floor(Math.random() * 10) + 1,
                    "limit": 12,
                    "id": 0,
                    "sort": 1,
                    "author": "",
                    "discover": "porn",
                    "category": '',
                    "filter": "videos"
                };
                request({
                    uri: `https://fiqfuq.com/api`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        'User-Agent': `${process.env.USERAGENT}`,
                    },
                    body: bodyData
                }, async function (err, response, body) {

                    const ran = Math.floor(Math.random() * body.length);
                    const files = new AttachmentBuilder(body[ran].video_url, 'SpicyFlix.mp4')
                    await interaction.editReply({ content: `${body[ran].description || "none"}\n\nloading content...` })

                    try {
                        await interaction.editReply({
                            files: [files], content: `**🔥️ Nsfw Porn**\n${body[ran].description || "none"}`
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    cuckold_fiqfuq: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const bodyData = {
                    "a": "discover",
                    "skip": Math.floor(Math.random() * 10) + 1,
                    "limit": 12,
                    "id": 0,
                    "sort": 1,
                    "author": "",
                    "discover": "cuckold",
                    "category": '',
                    "filter": "videos"
                };
                request({
                    uri: `https://fiqfuq.com/api`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        'User-Agent': `${process.env.USERAGENT}`,
                    },
                    body: bodyData
                }, async function (err, response, body) {

                    const ran = Math.floor(Math.random() * body.length);
                    const files = new AttachmentBuilder(body[ran].video_url, 'SpicyFlix.mp4')
                    await interaction.editReply({ content: `${body[ran].description || "none"}\n\nloading content...` })

                    try {
                        await interaction.editReply({
                            files: [files], content: `**🔥️ Nsfw Cuckold**\n${body[ran].description || "none"}`
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    gay_fiqfuq: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const bodyData = {
                    "a": "discover",
                    "skip": Math.floor(Math.random() * 5) + 1,
                    "limit": 12,
                    "id": 0,
                    "sort": 1,
                    "author": "",
                    "discover": "gay",
                    "category": '',
                    "filter": "videos"
                };
                request({
                    uri: `https://fiqfuq.com/api`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        'User-Agent': `${process.env.USERAGENT}`,
                    },
                    body: bodyData
                }, async function (err, response, body) {

                    const ran = Math.floor(Math.random() * body.length);
                    const files = new AttachmentBuilder(body[ran].video_url, 'SpicyFlix.mp4')
                    await interaction.editReply({ content: `${body[ran].description || "none"}\n\nloading content...` })

                    try {
                        await interaction.editReply({
                            files: [files], content: `**🔥️ Nsfw Gay**\n${body[ran].description || "none"}`
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    homemade_fiqfuq: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const bodyData = {
                    "a": "discover",
                    "skip": Math.floor(Math.random() * 10) + 1,
                    "limit": 12,
                    "id": 0,
                    "sort": 1,
                    "author": "",
                    "discover": "homemade",
                    "category": '',
                    "filter": "videos"
                };
                request({
                    uri: `https://fiqfuq.com/api`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        'User-Agent': `${process.env.USERAGENT}`,
                    },
                    body: bodyData
                }, async function (err, response, body) {

                    const ran = Math.floor(Math.random() * body.length);
                    const files = new AttachmentBuilder(body[ran].video_url, 'SpicyFlix.mp4')
                    await interaction.editReply({ content: `${body[ran].description || "none"}\n\nloading content...` })

                    try {
                        await interaction.editReply({
                            files: [files], content: `**🔥️ Nsfw Homemade**\n${body[ran].description || "none"}`
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    lesbian_fiqfuq: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const bodyData = {
                    "a": "discover",
                    "skip": Math.floor(Math.random() * 10) + 1,
                    "limit": 12,
                    "id": 0,
                    "sort": 1,
                    "author": "",
                    "discover": "lesbian",
                    "category": '',
                    "filter": "videos"
                };
                request({
                    uri: `https://fiqfuq.com/api`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        'User-Agent': `${process.env.USERAGENT}`,
                    },
                    body: bodyData
                }, async function (err, response, body) {

                    const ran = Math.floor(Math.random() * body.length);
                    const files = new AttachmentBuilder(body[ran].video_url, 'SpicyFlix.mp4')
                    await interaction.editReply({ content: `${body[ran].description || "none"}\n\nloading content...` })

                    try {
                        await interaction.editReply({
                            files: [files], content: `**🔥️ Nsfw Lesbian**\n${body[ran].description || "none"}`
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    onlyfans_fiqfuq: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const bodyData = {
                    "a": "discover",
                    "skip": Math.floor(Math.random() * 10) + 1,
                    "limit": 12,
                    "id": 0,
                    "sort": 1,
                    "author": "",
                    "discover": "onlyfans",
                    "category": '',
                    "filter": "videos"
                };
                request({
                    uri: `https://fiqfuq.com/api`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        'User-Agent': `${process.env.USERAGENT}`,
                    },
                    body: bodyData
                }, async function (err, response, body) {

                    const ran = Math.floor(Math.random() * body.length);
                    const files = new AttachmentBuilder(body[ran].video_url, 'SpicyFlix.mp4')
                    await interaction.editReply({ content: `${body[ran].description || "none"}\n\nloading content...` })

                    try {
                        await interaction.editReply({
                            files: [files], content: `**🔥️ Nsfw Onlyfans**\n${body[ran].description || "none"}`
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    blowjob_fiqfuq: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const bodyData = {
                    "a": "discover",
                    "skip": Math.floor(Math.random() * 5) + 1,
                    "limit": 12,
                    "id": 0,
                    "sort": 1,
                    "author": "",
                    "discover": "blowjob",
                    "category": '',
                    "filter": "videos"
                };

                request({
                    uri: `https://fiqfuq.com/api`,
                    json: true,
                    jsonReplacer: true,
                    headers: {
                        'User-Agent': `${process.env.USERAGENT}`,
                    },
                    body: bodyData
                }, async function (err, response, body) {

                    const ran = Math.floor(Math.random() * body.length);
                    const files = new AttachmentBuilder(body[ran].video_url, 'SpicyFlix.mp4')
                    await interaction.editReply({ content: `${body[ran].description || "none"}\n\nloading content...` })

                    try {
                        await interaction.editReply({
                            files: [files], content: `**🔥️ Nsfw Blowjob**\n${body[ran].description || "none"}`
                        })
                    } catch (e) {
                        interaction.editReply({
                            embeds: [defaulterloading(interaction)],
                            content: ""
                        })
                    }
                })
            }
        })
    },

    tiktok_xfollow: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 23) + 1;
                const page = Math.floor(Math.random() * 12) + 1;
                try {
                    request({
                        uri: `https://www.xfollow.com/api/v1/post/tag/tiktok?genders=cf&limit=${randomNumber}&page=${page}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            'User-Agent': `${process.env.USERAGENT}`,
                        },
                    }, async function (err, response, body) {

                        const MapTheAPi = Math.floor(Math.random() * body.length);
                        const ranfile = body[MapTheAPi].post.media[0].url;

                        const files = new AttachmentBuilder(ranfile, 'SpicyFlix.mp4')
                        await interaction.editReply({ content: `${body[MapTheAPi].post.text || " "}\n\nloading content...` })

                        try {
                            await interaction.editReply({
                                files: [files], content: `**🔥️ Nsfw Tiktok**\n${body[MapTheAPi].description || " "}`
                            })
                        } catch (e) {
                            console.log(e)
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },

    feet_xfollow: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 23) + 1;
                const page = Math.floor(Math.random() * 12) + 1;
                try {
                    request({
                        uri: `https://www.xfollow.com/api/v1/post/tag/feet?genders=cf&limit=${randomNumber}&page=${page}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            'User-Agent': `${process.env.USERAGENT}`,
                        },
                    }, async function (err, response, body) {

                        const MapTheAPi = Math.floor(Math.random() * body.length);
                        const ranfile = body[MapTheAPi].post.media[0].url;

                        const files = new AttachmentBuilder(ranfile, 'SpicyFlix.mp4')
                        await interaction.editReply({ content: `${body[MapTheAPi].post.text || " "}\n\nloading content...` })

                        try {
                            await interaction.editReply({
                                files: [files], content: `**🔥️ Feet**\n${body[MapTheAPi].description || " "}`
                            })
                        } catch (e) {
                            console.log(e)
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },


    fetish_xfollow: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 23) + 1;
                const page = Math.floor(Math.random() * 12) + 1;
                try {
                    request({
                        uri: `https://www.xfollow.com/api/v1/post/tag/fetish?genders=cf&limit=${randomNumber}&page=${page}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            'User-Agent': `${process.env.USERAGENT}`,
                        },
                    }, async function (err, response, body) {

                        const MapTheAPi = Math.floor(Math.random() * body.length);
                        const ranfile = body[MapTheAPi].post.media[0].url;

                        const files = new AttachmentBuilder(ranfile, 'SpicyFlix.mp4')
                        await interaction.editReply({ content: `${body[MapTheAPi].post.text || " "}\n\nloading content...` })

                        try {
                            await interaction.editReply({
                                files: [files], content: `**🔥️ Fetish**\n${body[MapTheAPi].description || " "}`
                            })
                        } catch (e) {
                            console.log(e)
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },

    feet_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                try {
                    request({
                        uri: `https://pin.porn/api/videoInfo/?tag_id=287/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            "User-Agent": process.env.pinporn_agent,
                        }
                    }, async function (err, response, body) {

                        const FileSender = new AttachmentBuilder()
                            .setFile(body.data[0].link)
                            .setName('SpicyFlix.mp4')

                        const arryTags = body.data[0].tags
                        const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                        const embed = new EmbedBuilder()
                            .setDescription(body.data[0].title)
                            .setColor(client.color)
                        try {
                            interaction.editReply({
                                content: "**🔥️ Feet Porn**",
                                embeds: [embed],
                                files: [FileSender]
                            })
                        } catch (e) {
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },

    dildo_pinporn: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                try {
                    request({
                        uri: `https://pin.porn/api/videoInfo/?tag_id=273/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            "User-Agent": process.env.pinporn_agent,
                        }
                    }, async function (err, response, body) {

                        const FileSender = new AttachmentBuilder()
                            .setFile(body.data[0].link)
                            .setName('SpicyFlix.mp4')

                        const arryTags = body.data[0].tags
                        const SelectedTags = arryTags.map(tag => tag.tag).join(', ');

                        const embed = new EmbedBuilder()
                            .setDescription(body.data[0].title)
                            .setColor(client.color)
                        try {
                            interaction.editReply({
                                content: "**🔥️ Dildo Porn**",
                                embeds: [embed],
                                files: [FileSender]
                            })
                        } catch (e) {
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },

    gay_xfollow: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 23) + 1;
                const page = Math.floor(Math.random() * 12) + 1;
                try {
                    request({
                        uri: `https://www.xfollow.com/api/v1/post/tag/gay?genders=cf&limit=${randomNumber}&page=${page}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            'User-Agent': `${process.env.USERAGENT}`,
                        },
                    }, async function (err, response, body) {

                        const MapTheAPi = Math.floor(Math.random() * body.length);
                        const ranfile = body[MapTheAPi].post.media[0].url;

                        const files = new AttachmentBuilder(ranfile, 'SpicyFlix.mp4')
                        await interaction.editReply({ content: `${body[MapTheAPi].post.text || " "}\n\nloading content...` })

                        try {
                            await interaction.editReply({
                                files: [files], content: `**🔥️ Gay**\n${body[MapTheAPi].description || " "}`
                            })
                        } catch (e) {
                            console.log(e)
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },

    dildo_xfollow: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 23) + 1;
                const page = Math.floor(Math.random() * 12) + 1;
                try {
                    request({
                        uri: `https://www.xfollow.com/api/v1/post/tag/dildo?genders=cf&limit=${randomNumber}&page=${page}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            'User-Agent': `${process.env.USERAGENT}`,
                        },
                    }, async function (err, response, body) {

                        const MapTheAPi = Math.floor(Math.random() * body.length);
                        const ranfile = body[MapTheAPi].post.media[0].url;

                        const files = new AttachmentBuilder(ranfile, 'SpicyFlix.mp4')
                        await interaction.editReply({ content: `${body[MapTheAPi].post.text || " "}\n\nloading content...` })

                        try {
                            await interaction.editReply({
                                files: [files], content: `**🔥️ Dildo**\n${body[MapTheAPi].description || " "}`
                            })
                        } catch (e) {
                            console.log(e)
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },


    asian_xfollow: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 23) + 1;
                const page = Math.floor(Math.random() * 12) + 1;
                try {
                    request({
                        uri: `https://www.xfollow.com/api/v1/post/tag/asian?genders=cf&limit=${randomNumber}&page=${page}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            'User-Agent': `${process.env.USERAGENT}`,
                        },
                    }, async function (err, response, body) {

                        const MapTheAPi = Math.floor(Math.random() * body.length);
                        const ranfile = body[MapTheAPi].post.media[0].url;

                        const files = new AttachmentBuilder(ranfile, 'SpicyFlix.mp4')
                        await interaction.editReply({ content: `${body[MapTheAPi].post.text || " "}\n\nloading content...` })

                        try {
                            await interaction.editReply({
                                files: [files], content: `**🔥️ Asian**\n${body[MapTheAPi].description || " "}`
                            })
                        } catch (e) {
                            console.log(e)
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },

    blowjob_xfollow: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 23) + 1;
                const page = Math.floor(Math.random() * 12) + 1;
                try {
                    request({
                        uri: `https://www.xfollow.com/api/v1/post/tag/blowjob?genders=cf&limit=${randomNumber}&page=${page}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            'User-Agent': `${process.env.USERAGENT}`,
                        },
                    }, async function (err, response, body) {

                        const MapTheAPi = Math.floor(Math.random() * body.length);
                        const ranfile = body[MapTheAPi].post.media[0].url;

                        const files = new AttachmentBuilder(ranfile, 'SpicyFlix.mp4')
                        await interaction.editReply({ content: `${body[MapTheAPi].post.text || " "}\n\nloading content...` })

                        try {
                            await interaction.editReply({
                                files: [files], content: `**🔥️ Blowjob**\n${body[MapTheAPi].description || " "}`
                            })
                        } catch (e) {
                            console.log(e)
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },


    boobs_xfollow: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 23) + 1;
                const page = Math.floor(Math.random() * 12) + 1;
                try {
                    const boobs_tag = ['boobies', 'smallboobs', 'hugeboobs', 'bigboobsbigtits', 'milkboobs', 'bigboobies', 'flashboobs'];
                    const ri = Math.floor(Math.random() * boobs_tag.length);
                    const ran_tag = boobs_tag[ri];
                    request({
                        uri: `https://www.xfollow.com/api/v1/post/tag/${ran_tag}?genders=cf&limit=${randomNumber}&page=${page}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            'User-Agent': `${process.env.USERAGENT}`,
                        },
                    }, async function (err, response, body) {

                        const MapTheAPi = Math.floor(Math.random() * body.length);
                        const ranfile = body[MapTheAPi].post.media[0].url;

                        const files = new AttachmentBuilder(ranfile, 'SpicyFlix.mp4')
                        await interaction.editReply({ content: `${body[MapTheAPi].post.text || " "}\n\nloading content...` })

                        try {
                            await interaction.editReply({
                                files: [files], content: `**🔥️ Boobs**\n${body[MapTheAPi].description || " "}`
                            })
                        } catch (e) {
                            console.log(e)
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },


    cuckold_xfollow: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 23) + 1;
                const page = Math.floor(Math.random() * 12) + 1;
                try {
                    request({
                        uri: `https://www.xfollow.com/api/v1/post/tag/cuckold?genders=cf&limit=${randomNumber}&page=${page}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            'User-Agent': `${process.env.USERAGENT}`,
                        },
                    }, async function (err, response, body) {

                        const MapTheAPi = Math.floor(Math.random() * body.length);
                        const ranfile = body[MapTheAPi].post.media[0].url;

                        const files = new AttachmentBuilder(ranfile, 'SpicyFlix.mp4')
                        await interaction.editReply({ content: `${body[MapTheAPi].post.text || " "}\n\nloading content...` })

                        try {
                            await interaction.editReply({
                                files: [files], content: `**🔥️ Cuckold**\n${body[MapTheAPi].description || " "}`
                            })
                        } catch (e) {
                            console.log(e)
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },

    milf_xfollow: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 23) + 1;
                const page = Math.floor(Math.random() * 12) + 1;
                try {
                    request({
                        uri: `https://www.xfollow.com/api/v1/post/tag/milf?genders=cf&limit=${randomNumber}&page=${page}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            'User-Agent': `${process.env.USERAGENT}`,
                        },
                    }, async function (err, response, body) {

                        const MapTheAPi = Math.floor(Math.random() * body.length);
                        const ranfile = body[MapTheAPi].post.media[0].url;

                        const files = new AttachmentBuilder(ranfile, 'SpicyFlix.mp4')
                        await interaction.editReply({ content: `${body[MapTheAPi].post.text || " "}\n\nloading content...` })

                        try {
                            await interaction.editReply({
                                files: [files], content: `**🔥️ Milf**\n${body[MapTheAPi].description || " "}`
                            })
                        } catch (e) {
                            console.log(e)
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },

    onlyfans_xfollow: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 23) + 1;
                const page = Math.floor(Math.random() * 12) + 1;
                try {
                    request({
                        uri: `https://www.xfollow.com/api/v1/post/tag/onlyfans?genders=cf&limit=${randomNumber}&page=${page}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            'User-Agent': `${process.env.USERAGENT}`,
                        },
                    }, async function (err, response, body) {

                        const MapTheAPi = Math.floor(Math.random() * body.length);
                        const ranfile = body[MapTheAPi].post.media[0].url;

                        const files = new AttachmentBuilder(ranfile, 'SpicyFlix.mp4')
                        await interaction.editReply({ content: `${body[MapTheAPi].post.text || " "}\n\nloading content...` })

                        try {
                            await interaction.editReply({
                                files: [files], content: `**🔥️ Onlyfans**\n${body[MapTheAPi].description || " "}`
                            })
                        } catch (e) {
                            console.log(e)
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },


    porn_xfollow: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 23) + 1;
                const page = Math.floor(Math.random() * 12) + 1;
                try {
                    const p_tag = ['pornstars', 'porn', 'arabpornstar', 'tiktokporn', 'pornhub'];
                    const ri = Math.floor(Math.random() * p_tag.length);
                    const ran_tag = p_tag[ri];
                    request({
                        uri: `https://www.xfollow.com/api/v1/post/tag/${p_tag}?genders=cf&limit=${randomNumber}&page=${page}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            'User-Agent': `${process.env.USERAGENT}`,
                        },
                    }, async function (err, response, body) {

                        const MapTheAPi = Math.floor(Math.random() * body.length);
                        const ranfile = body[MapTheAPi].post.media[0].url;

                        const files = new AttachmentBuilder(ranfile, 'SpicyFlix.mp4')
                        await interaction.editReply({ content: `${body[MapTheAPi].post.text || " "}\n\nloading content...` })

                        try {
                            await interaction.editReply({
                                files: [files], content: `**🔥️ Porn**\n${body[MapTheAPi].description || " "}`
                            })
                        } catch (e) {
                            console.log(e)
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },

    tiktok_fikfap: async function (interaction, client) {
        interaction.deferReply().then(async () => {
            const support = client.support_server
            if (!interaction.channel.nsfw) {

                interaction.editReply({ embeds: [defaultNSFW(interaction)] })
            } else {
                const randomNumber = Math.floor(Math.random() * 20) + 1;
                const page = Math.floor(Math.random() * 33) + 1;
                try {
                    request({
                        uri: `https://api.fikfap.com/hashtags/label/tiktok/posts?amount=${randomNumber}&topPercentage=${page}`,
                        json: true,
                        jsonReplacer: true,
                        headers: {
                            'User-Agent': `${process.env.USERAGENT}`,
                            'Authorization-Anonymous': `${process.env.FIKFAP_AUTH}`,
                        },
                    }, async function (err, response, body) {

                        const MapTheAPi = Math.floor(Math.random() * body.length);
                        const ranris = body[MapTheAPi];

                        const files = new AttachmentBuilder(ranris.videoFileHqUrl, 'SpicyFlix.mp4')
                        await interaction.editReply({ content: `${ranris.label || " "}\n\nloading content...` })

                        try {
                            await interaction.editReply({
                                files: [files], content: `**🔥️ TikTok**\n${ranris.label || " "}`
                            })
                        } catch (e) {
                            console.log(e)
                            interaction.editReply({
                                embeds: [defaulterloading(interaction)],
                                content: ""
                            })
                        }
                    })
                } catch (e) {
                    console.log(e)
                    interaction.editReply({
                        embeds: [defershow(interaction)],
                        content: ""
                    })
                }
            }
        })
    },
}
