/**
 * named export（具名匯出）：可匯獨立的物件、變數、函式等等，匯出前必須給予特定名稱，而匯入時也必須使用相同的名稱。另外，一個檔案中可以有多個 named export。
 * default export（預設匯出）：一個檔案僅能有唯一的 default export，而此類型不需要給予名稱。
*/

import { EventEmitter } from 'events';
export default new EventEmitter();