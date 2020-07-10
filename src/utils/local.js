class Localdata{
    constructor(){
        this.initdata = [
            {
                id: "111",
                name: "【5本26.8元】经典儿童文学彩图青少版八十天环游地球中学生语文教学大纲",
                price: '12.60',
                img: 'upload/p1.jpg',
                count: 1
            },
            {
                id: "222",
                name: "【2000张贴纸】贴纸书 3-6岁 贴画儿童 贴画书全套12册 贴画 贴纸儿童 ",
                price: '22.60',
                img: 'upload/p2.jpg',
                count: 1
            },
            {
                id: "333",
                name: "唐诗三百首+成语故事全2册 一年级课外书 精装注音儿童版 小学生二三年级课外阅读书籍",
                price: '32.60',
                img: 'upload/p3.jpg',
                count: 1
            }
        ]
    }
    init(){
        localStorage.setItem("initdata",JSON.stringify(this.initdata));
    }
    getdata(){
        // console.log(localStorage.getItem("initdata"))
        return JSON.parse(localStorage.getItem("initdata")||"{}")
    }
    savedata(data){
        localStorage.setItem("initdata", JSON.stringify(data));
    }
    updatecar(obj){
       
        let data = this.getdata();
        let index=-1;
        data.find((e,i)=>{
            index=i
            return obj.id===e.id
        });
        if(index>-1){
            data[index] = { ...data[index],...obj}
        }else{
            data.push(obj)
        }
        this.savedata(data);
    }

}


let local = new Localdata()
// 初始化数据
local.init();
export default local;  ;