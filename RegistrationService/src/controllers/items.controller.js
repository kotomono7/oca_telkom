const { v4 } = require("uuid");
const dateUtils = require("../utils/date.utils");

let itemData = [{
    // id: v4(),
    plat_nomor: 'B 123 34',
    warna: 'Hitam',
    tipe: 'SUV',
    tanggal_masuk: dateUtils.getCurrentDateTime()
}];

const getAllItems = (req, res) => {
    if (itemData.length < 1) return res.status(404).send('Tidak ada data');

    res.status(200).json(itemData);
};

const addNewItem = async (req, res) => {
    const { plat_nomor, warna, tipe } = req.body;

    if (!plat_nomor || !warna || !tipe) {
        return res.status(400).send('Data tidak boleh ada yang kosong!');
    }

    // const newRegistration = { id: v4(), plat_nomor, warna, tipe };
    const newRegistration = { plat_nomor, warna, tipe, tanggal_masuk: dateUtils.getCurrentDateTime()};
    await itemData.push({ ...newRegistration });

    res.status(201).send(newRegistration);
};

const getItemById = async (req, res) => {
    const { id } = req.params;
    const itemFound = await itemData.find((item) => item.plat_nomor === id);
    console.log(itemFound);

    res.status(200).send(itemFound);
};

const deleteItemById = async (req, res) => {
    const { id } = req.params;

    itemData = await itemData.filter((item) => item.plat_nomor !== id);
    console.log(itemData);
    
    res.status(204).send(`Data berhasil dihapus`);
};

const updateItemById = async (req, res) => {
    const { plat_nomor, warna, tipe } = req.body;

    const item = await itemData.find((item) => item.plat_nomor === plat_nomor);

    if (!item) return res.status(404).send('Data tidak ditemukan');

    if (plat_nomor) item.plat_nomor = plat_nomor;
    if (warna) item.warna = warna;
    if (tipe) item.tipe = tipe;

    res.status(200).send(item);
};

const countItemByType = async (req, res) => {
    const { tipe } = req.body;
    var countItemData = await itemData.filter((item) => item.tipe === tipe).length;
    console.log(countItemData);

    res.status(200).send({jumlah_kendaraan: countItemData});
};

const getItemByColor = async (req, res) => {
    const { warna } = req.body;
    
    const itemFound = await itemData.filter((item) => item.warna === warna);
    console.log(itemFound);

    let arrResult = [];

    for (var i = 0; i < itemFound.length; i++)
    {
        arrResult.push(itemFound[i].plat_nomor);
    }

    res.status(200).send({plat_nomor: arrResult});
};

module.exports = { getAllItems, addNewItem, getItemById, deleteItemById, updateItemById, countItemByType, getItemByColor };
