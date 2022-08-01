var en = [
    "align","attach","audit","available","area","abort","absence","ability","active","adjust",
    "air shower","abnormal","actual","add","alarm","automatic","average","acid","annually",
    "benchmark","backup","beam","bottle","bank","basic","bottom","broken","cassette","continue",
    "card","cart","choose","confidential","contamination","cycle","cancel","center","certify",
    "change","chart","check","chemical","clean","clear","color","collect","comment","complete",
    "computer","confirm","control","copy","count","customer","cycle time","daily","date",
    "document","data","defect","delay","delete","dry","event","error","environment",
    "emergency stop","execute","emergency","engineer","enter","equipment","exit",
    "follow","fault","floor","freeze","find","focus","full","function","glass","green",
    "gas","grade","group","hard-disk","heavy","helmet","hot","handle","help","held","hold",
    "hole","impact","Instruction","information","improve","inform","input","inspection",
    "Internet","interview","Inhibition","issue","job","keep","keyboard","lot","Lithography",
    "label","leader","learn","level","lift","light","line","link","liquid","list","load","loading",
    "location","lock","log sheet","lose","monthly","miss-operation","mechanical",
    "monitor","move","machine","maintain","manual","manufacture","mark","mask","material",
    "measure","merge","message","metal","monitor","more","new","normal","note","notice",
    "number","out","operation","off-line","office","on-line","output","oven","pod",
    "pressure","part","product","purge","page","perfect","plus","positive","paper","parameter",
    "particle","pass","password","personal","photo","plan","point","position","postpone",
    "power","practice","prepare","press","preview","price","print","priority","process",
    "protect","push","quantity","quality","remind","remark","recover","rate","re-certify",
    "recipe","record","release","remove","repair","report","reset","rework","route","rule","run",
    "run-card","scratch","Spec. (specification)","season","shift",
    "S.O.P (Standard Operating Procedures)","same","sheet","speed","super"," super hot run",
    "safe","save","scrap","screen","select","service","show","skip","sorter","source","split","stage",
    "standard","standby","start","status","step","stocker",'success',"supervisor","support",
    "switch","system","tune","track","telephone","turn rate","thickness","tag","tape",
    "target","technician","temperature","time","title","top","training","trend","unload","use",
    "username","vendor","view","weekly","waiting","wafer","warning","wet","window","yield","zero"
]

var cn=[
    "對準","附上","稽核","可使用的"," 區域","中止","缺席","能力","主動的","調整","潔淨走道",
    "異常的","真實的","增加","警報","自動的","平均","酸","每年的","標竿學習","支援","光束",
    "瓶子","銀行、暫存","基礎的","底部","破掉的","晶舟","繼續","卡片","手推車","挑選","機密",
    "污染","週期","取消","中心","技能確認","更換","圖表","檢查","化學","清潔","清除","顏色",
    "蒐集","註解","完成的","電腦","確認","控制","拷貝","計算","客戶","生產週期","每日的",
    "日期","文件","資料","缺陷","延遲","刪除","乾的","事件","錯誤","環境","緊急停止","執行",
    "緊急情況","工程師","進入","設備","退出","照做","錯誤","地板","凍結","發現","焦點","滿的",
    "功能","眼鏡","綠色","氣體","等級","群組","硬盤","重的","安全帽","熱的","處理","幫助",
    "暫停(過去式)","暫停","缺陷","影響","指令","資訊","改善","通知","輸入","檢驗","網際網路",
    "面試","禁止、禁用","發行、議題","工作","保持","鍵盤","批貨","光學","標籤","組長","學習",
    "程度","掀起","光","直線","聯結","液體","清單","上貨﹝裝載﹞","負荷","區域","鎖住",
    "工作紀錄","遺失","每月的","錯誤動作","機械的","每日檢測","移動、產出","機器","維護",
    "手動","製造","記號","光罩","原料","量測","合併","訊息","金屬","監視器、測機","多的",
    "新的","正常的","註解","通知","號碼","輸出","操作","離線","辦公室","在線","輸出",
    "烤箱","晶片盒","壓力","零件","產品","清除","頁數","完美","加","確實","紙張","參數",
    "微粒","合格","密碼","個人的","相片","計劃","點","位置","延期","力量","練習","準備",
    "按下","預覽","價格","列印","優先權","過程","保護","推進","數量","品質","提醒","註記",
    "恢復、復機","比率","再檢定","食譜、處方、程式","記錄","釋放","移開","修理","報告",
    "重設","重做","路程","規則","運轉 、跑","流程卡","刮傷","規格","暖機、季節","班次",
    "標準作業程序","相同","表單","速度","超級","超級急件","安全","儲存","報廢","螢幕",
    "選擇","服務","顯示","跳過","分類機","來源","分帳、分批","站別、 階段","標準","等待",
    "啟動","狀況","步驟","儲存櫃","成功","監督者","支援","開關","系統","調整","追蹤",
    "電話","週轉率","厚度","標籤、標註","膠帶","目標","技術員","溫度","時間","標題",
    "頂端","訓練","趨勢","下貨(卸載)","使用","使用者名稱","廠商","查看","每週","等待",
    "晶圓","警告","濕的","視窗","良率","零"
]

var an=[]
// console.log(en.length)
// console.log(cn.length);


var answer = "";

//選擇題
function btnenOk_Click(){
    var question = Math.round(Math.random()*(en.length));
    answer = question;
    var answer_A = Math.round(Math.random()*(en.length));
    var answer_B = Math.round(Math.random()*(en.length));
    var answer_C = Math.round(Math.random()*(en.length));
    var answer_D = Math.round(Math.random()*(en.length));
    // 答案位置
    var E = Math.round(Math.random()*4)+1;

    document.getElementById('question').innerHTML = en[question];

    while (answer_A == question){
        answer_A = Math.round(Math.random()*(en.length));     
    }
    while (answer_B == question | answer_B == answer_A |answer_B == answer_C){
        answer_B = Math.round(Math.random()*(en.length));    
    }
    while (answer_C == question | answer_C == answer_A | answer_C == answer_B){
        answer_C = Math.round(Math.random()*(en.length));     
    }
    while (answer_D == question | answer_D == answer_A | answer_D == answer_B | answer_D == answer_C){
        answer_D = Math.round(Math.random()*(en.length));  
    }
    an[0] = cn[answer_A];
    an[1] = cn[answer_B];
    an[2] = cn[answer_C];
    an[3] = cn[answer_D];
    an[E] = cn[answer];
    // console.log(an);

    document.getElementById('answer').innerHTML = an[0] + '\n' + an[1] + '\n' + an[2] + '\n'+ an[3] + '\n'  ;
    return answer;   
}


//答案
function btnenanswer_Click(){
    document.getElementById('correct').innerHTML = cn[answer];
}


function btncnOk_Click(){
    var question = Math.round(Math.random()*(en.length));
    answer = question;
    var answer_A = Math.round(Math.random()*(en.length));
    var answer_B = Math.round(Math.random()*(en.length));
    var answer_C = Math.round(Math.random()*(en.length));
    var answer_D = Math.round(Math.random()*(en.length));
    // 答案位置
    var E = Math.round(Math.random()*4)+1;

    document.getElementById('question').innerHTML = cn[question];

    while (answer_A == question){
        answer_A = Math.round(Math.random()*(cn.length));     
    }
    while (answer_B == question | answer_B == answer_A |answer_B == answer_C){
        answer_B = Math.round(Math.random()*(cn.length));    
    }
    while (answer_C == question | answer_C == answer_A | answer_C == answer_B){
        answer_C = Math.round(Math.random()*(cn.length));     
    }
    while (answer_D == question | answer_D == answer_A | answer_D == answer_B | answer_D == answer_C){
        answer_D = Math.round(Math.random()*(cn.length));  
    }
    an[0] = en[answer_A];
    an[1] = en[answer_B];
    an[2] = en[answer_C];
    an[3] = en[answer_D];
    an[E] = en[answer];
    // console.log(an);

    document.getElementById('answer').innerHTML = an[0] + '\n' + an[1] + '\n' + an[2] + '\n'+ an[3] + '\n'  ;
    return answer;   
}

function btncnanswer_Click(){
    document.getElementById('correct').innerHTML = en[answer];
}