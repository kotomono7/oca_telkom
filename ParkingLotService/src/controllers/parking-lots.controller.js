const { v4 } = require("uuid");
const dateUtils = require("../utils/date.utils");

let parkingLotData = [
    {
        parking_lot: 'A1',
        available_status: true,
        plat_nomor: null,
        tanggal_masuk: null
    },
    {
        parking_lot: 'A2',
        available_status: true,
        plat_nomor: null,
        tanggal_masuk: null
    },
    {
        parking_lot: 'A3',
        available_status: true,
        plat_nomor: null,
        tanggal_masuk: null
    },
    {
        parking_lot: 'B1',
        available_status: true,
        plat_nomor: null,
        tanggal_masuk: null
    },
    {
        parking_lot: 'B2',
        available_status: true,
        plat_nomor: null,
        tanggal_masuk: null
    },
    {
        parking_lot: 'B3',
        available_status: true,
        plat_nomor: null,
        tanggal_masuk: null
    },
];

const getAvailableParkingLots = async (req, res) => {
    let availableParkingLots = await parkingLotData.filter((item) => item.available_status === true);

    if (!availableParkingLots) return res.status(404).send('Parkiran sudah penuh');

    res.status(200).json(availableParkingLots);
};

module.exports = { getAvailableParkingLots };
