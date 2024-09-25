import fetch from 'node-fetch';

export default async function handler(req, res) {
    // Daftar khodam secara random
    let khodams = [
        { name: 'Werewolf', url: 'https://widipe.com/v3/text2img?text=Werewofl' },
        { name: 'Red Devil', url: 'https://widipe.com/v3/text2img?text=Red%20Devil' },
        { name: 'Bird Man', url: 'https://widipe.com/v3/text2img?text=Bird%20Man' },
        { name: 'Female Devil', url: 'https://widipe.com/v3/text2img?text=Female%20Devil' },
        { name: 'Ghost', url: 'https://widipe.com/v3/text2img?text=Ghost' },
        { name: 'Demon', url: 'https://widipe.com/v3/text2img?text=Demon' },
        { name: 'Angel', url: 'https://widipe.com/v3/text2img?text=Angel' },
        { name: 'Vampire', url: 'https://widipe.com/v3/text2img?text=Vampire' },
        { name: 'Zombie', url: 'https://widipe.com/v3/text2img?text=Zombie' },
        { name: 'Witch', url: 'https://widipe.com/v3/text2img?text=Witch' },
        { name: 'Shaman', url: 'https://widipe.com/v3/text2img?text=Shaman' },
        { name: 'Fairy', url: 'https://widipe.com/v3/text2img?text=Fairy' },
        { name: 'Mummy', url: 'https://widipe.com/v3/text2img?text=Mummy' },
        { name: 'Yeti', url: 'https://widipe.com/v3/text2img?text=Yeti' },
        { name: 'Jinn', url: 'https://widipe.com/v3/text2img?text=Jinn' },
        { name: 'Golem', url: 'https://widipe.com/v3/text2img?text=Golem' },
        { name: 'Pocong', url: 'https://widipe.com/v3/text2img?text=Pocong' },
        { name: 'Kuntilanak', url: 'https://widipe.com/v3/text2img?text=Kuntilanak' },
        { name: 'Gendruwo', url: 'https://widipe.com/v3/text2img?text=Gendruwo' },
        { name: 'God Man', url: 'https://widipe.com/v3/text2img?text=God%20Man' },
        { name: 'Horse Man', url: 'https://widipe.com/v3/text2img?text=Horse%20Man' }
    ];

    // Pilih khodam secara acak
    let randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];

    // Ambil gambar khodam menggunakan fetch
    let response = await fetch(randomKhodam.url);
    let imageBuffer = await response.buffer(); // Mendapatkan gambar dalam bentuk buffer

    // Kembalikan hasil dalam bentuk JSON
    res.status(200).json({
        message: `Wah sepertinya khodam kamu adalah ${randomKhodam.name} nih!`,
        khodam: randomKhodam.name,
        image_url: randomKhodam.url
    });
}
