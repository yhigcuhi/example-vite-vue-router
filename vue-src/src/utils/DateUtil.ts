// 日付ユーティリティ
/* import 日付操作ライブラリ*/
import moment, {MomentInput} from 'moment';
import 'moment/dist/locale/ja';

// static ロケールの設定
moment.locale('ja');
// static 日付フォーマット 定数s
export enum DateFormat {
    DAY = 'Y-MM-DD',
}

/**
 * => moment.Momentの日付形式へ
 * @param {MomentInput} val 変換する値
 * @return {MyDate} 変換結果
 */
const toMoment = (val: MomentInput = new Date()): moment.Moment => {
    // 前提条件
    if (typeof val === 'string') return moment(val.replace(/-/g, '/')); // iOSの問題検証
    // 値変換
    return moment(val);
}

/**
 * 日付型へ
 * @param {MomentInput} date 解析する日付
 * @returns {Date} 日付型へ
 */
export const parse = (date: MomentInput = new Date()): Date => toMoment(date).toDate();

/**
 * 日付 => 日付文字列
 * @param {MomentInput} date フォーマットする日付
 * @param {DateFormat|undefined} format 日付フォーマット文字列
 * @returns {string} 日付文字列
 */
export const format = (date: MomentInput = new Date(), format: DateFormat = DateFormat.DAY): string => toMoment(date).format(format);

/**
 * 現在日 (yyyy-MM-dd形式)
 * @returns {string} 現在日 (yyyy-MM-dd形式) 文字列
 */
export const nowDay = () => format(new Date(), DateFormat.DAY);

/**
 * 指定日の 指定に数分だけ 年 減算した 日付
 * @param date 指定日
 * @param amount 減数年
 * @return {Date} 指定日の 指定に数分だけ 日 減算した 日付
 */
export const subtractYears = (date: MomentInput = new Date(), amount: number = 1): Date => toMoment(date).subtract(amount, 'years').toDate();