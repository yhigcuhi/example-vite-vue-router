// 正規表現集
enum RegExp {
    FURIGANA = '/^[ぁ-んー]+$/', // ふりがな
    EMAIL = '/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\\.)+[a-zA-Z]{2,}$/', // メアド
}

export default RegExp;