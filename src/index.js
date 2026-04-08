const PROVINCES = [
    "An Giang", "Bắc Ninh", "Cao Bằng", "Cần Thơ", "Cà Mau", "Đà Nẵng", 
    "Đắk Lắk", "Điện Biên", "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Nội", 
    "Hà Tĩnh", "Hải Phòng", "Hồ Chí Minh", "Huế", "Hưng Yên", "Khánh Hòa", 
    "Lai Châu", "Lạng Sơn", "Lào Cai", "Lâm Đồng", "Nghệ An", "Ninh Bình", 
    "Phú Thọ", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sơn La", "Tây Ninh", 
    "Thái Nguyên", "Thanh Hóa", "Tuyên Quang", "Vĩnh Long"
];
const TELCO_PREFIX = {
    "Viettel": ["032", "033", "034", "035", "036", "037", "038", "039", "086", "096", "097", "098"],
    "Vinaphone": ["081", "082", "083", "084", "085", "088", "091", "094"],
    "Mobifone": ["070", "076", "077", "078", "079", "089", "090", "093"],
    "Vietnamobile": ["052", "056", "058", "092"],
    "Wintel": ["055"],
    "iTel": ["087"]
};
export const fix = (text) => {
    const rules = {
        "hoà": "hòa", "hoả": "hỏa", "hoá": "hóa", "hoã": "hõa", "hoạ": "họa",
        "uý": "úy", "uỳ": "ùy", "uỷ": "ủy", "uỹ": "ũy", "uỵ": "ụy",
        "oè": "òe", "oé": "óe", "oẻ": "ỏe", "oẽ": "õe", "oẹ": "ọe"
    };
    let result = text;
    for (const [old, val] of Object.entries(rules)) {
        result = result.split(old).join(val);
    }
    return result;
};
export const nosign = (text) => {
    const patterns = [
        { reg: /[àáảãạăằắẳẵặâầấẩẫậ]/g, val: 'a' },
        { reg: /[èéẻẽẹêềếểễệ]/g, val: 'e' },
        { reg: /[ìíỉĩị]/g, val: 'i' },
        { reg: /[òóỏõọôồốổỗộơờớởỡợ]/g, val: 'o' },
        { reg: /[ùúủũụưừứửữự]/g, val: 'u' },
        { reg: /[ỳýỷỹỵ]/g, val: 'y' },
        { reg: /[đ]/g, val: 'd' },
        { reg: /[ÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬ]/g, val: 'A' },
        { reg: /[ÈÉẺẼẸÊỀẾỂỄỆ]/g, val: 'E' },
        { reg: /[ÌÍỈĨỊ]/g, val: 'I' },
        { reg: /[ÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢ]/g, val: 'O' },
        { reg: /[ÙÚỦŨỤƯỪỨỬỮỰ]/g, val: 'U' },
        { reg: /[ỲÝYỶỸỴ]/g, val: 'Y' },
        { reg: /[Đ]/g, val: 'D' }
    ];
    let result = text;
    patterns.forEach(p => { result = result.replace(p.reg, p.val); });
    return result;
};
export const num2str = (num, lang = "vi") => {
    const maps = {
        "vi": ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"],
        "en": ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    };
    const mapping = maps[lang] || maps["vi"];
    return String(num).split('').filter(d => /\d/.test(d)).map(d => mapping[parseInt(d)]).join(' ');
};
export const clean = (text) => text.replace(/\s+/g, ' ').trim();
export const getProvinces = (format = "list") => {
    if (format === "json") return JSON.stringify(PROVINCES);
    if (format === "str") return PROVINCES.join(", ");
    return PROVINCES;
};
export const money = (amount, symbol = "đ") => {
    try {
        return amount.toLocaleString('de-DE') + symbol;
    } catch {
        return String(amount);
    }
};
export const slug = (text) => {
    let result = nosign(text).toLowerCase().trim();
    return result.replace(/[^a-z0-9\s-]/g, '').replace(/[\s-]+/g, '-');
};
export const isVi = (text) => {
    const viChars = "àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ";
    const lower = text.toLowerCase();
    return [...viChars].some(char => lower.includes(char));
};
export const getTelco = (phone) => {
    const p = String(phone).replace(/\D/g, '');
    const cleanP = p.startsWith("84") ? "0" + p.slice(2) : p;
    const prefix3 = cleanP.slice(0, 3);
    for (const [telco, prefixes] of Object.entries(TELCO_PREFIX)) {
        if (prefixes.includes(prefix3)) return telco;
    }
    return "Unknown";
};
export const cleanPhone = (phone, prefix = "0") => {
    const p = String(phone).replace(/\D/g, '');
    return p.startsWith("84") ? prefix + p.slice(2) : p;
};
export const vCaps = (text) => {
    return text.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
};
export const isEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};
export const genPass = (length = 8) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
};
export const isCccd = (number) => /^\d{12}$/.test(String(number));
export const parseCccd = (cccd) => {
    const s = String(cccd);
    if (!isCccd(s)) return null;
    const genderDigit = parseInt(s[3]);
    const century = 1900 + Math.floor(genderDigit / 2) * 100;
    return {
        gender: genderDigit % 2 === 0 ? "Nam" : "Nữ",
        birth_year: century + parseInt(s.slice(4, 6)),
        province_code: s.slice(0, 3),
        valid: true
    };
};
export const timeAgo = (seconds) => {
    if (seconds < 60) return "vừa xong";
    if (seconds < 3600) return `${Math.floor(seconds / 60)} phút trước`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} giờ trước`;
    return `${Math.floor(seconds / 86400)} ngày trước`;
};