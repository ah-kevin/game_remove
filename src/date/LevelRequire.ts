/**
 *
 * @author 
 *
 */
class LevelRequire {
    public requireElements: LevelRequireElement[];

    public constructor() {
        this.requireElements = [];
    }
    
    /**
     * 获取过关条件的数量(数组的长度)
     */
    public getLevelReqNum(): number {
        return this.requireElements.length;
    }
    
    
    /**
     * 添加对象到对象池里面
     * @param type
     * @param num
     */
    public addElement(type: string,num: number) {
        var ele: LevelRequireElement = new LevelRequireElement();
        ele.num = num;
        ele.type = type;
        this.requireElements.push(ele);
    }
    
    
    /**
     * 清空关卡元素
     */
    public openChange() {
        this.requireElements = [];
    }
    
    
    /**
     * 修改更新关卡数据
     * @param type
     * @param num
     */
    public changeReqNum(type: string,num: number) {
        var l:number=this.getLevelReqNum();
        for(var i=0;i<l;i++){
            if(this.requireElements[i].type=type){
                this.requireElements[i].num-=num;
                return;
            }
        }
    }
    
    
    /**
     * 检测关卡数据是否全部是删除
     */
    public isClear(): Boolean {
        var l: number = this.getLevelReqNum();
        for(var i = 0;i < l;i++) {
            if(this.requireElements[i].num>0) {
                return false;
            }
        }
        return true;
    }
}
