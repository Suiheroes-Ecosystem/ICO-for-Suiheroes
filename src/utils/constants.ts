import {notification} from 'antd'

export const InfoIdo = {
    token: {
        name: "SuiHeroes Token",
        symbol: "SHS",
        contract: "0x4d6385ad94a382a04b1d9cb3ff83c9728c2c43546853bc2b914be90bafb7bb91",
        address: "0x4d6385ad94a382a04b1d9cb3ff83c9728c2c43546853bc2b914be90bafb7bb91::suiheroes::SUIHEROES",
        link: "https://suiexplorer.com/object/0x4d6385ad94a382a04b1d9cb3ff83c9728c2c43546853bc2b914be90bafb7bb91?module=suiheroes",
        decimals: 9,
    },
    contract: "0x292b400567a422ab1f885d99a36a76017590aeeed8ce0e45f3e0d822cb142167",
    link: "https://suiexplorer.com/object/0xb5338838524629b576ffb4ee15cb9a7a06448fbdab64d6978541044417f76ef0?module=IDO",
    pool: "0xb5338838524629b576ffb4ee15cb9a7a06448fbdab64d6978541044417f76ef0",
    table: "0x7694103b380349a7fadee14410fed5f4ab7420a49639ec1b850635102f0f1a0e",
    suiDecimals: 9,
    idoSupply: "20,000,000",
    startTime: "1PM UTC 5/13",
    endTime: "1PM UTC 5/16",
    startTimeStr: "2023/5/13 13:00 UTC",
    endTimeStr: "2023/5/16 13:00 UTC",
    rate: "80"
}

export const openNotification = (type : 'success' | 'error' | 'info' | 'warning', title : string, description? : string) => {
    notification[type]({
        message : title, description : description, placement : 'topLeft'
    })
}

export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}