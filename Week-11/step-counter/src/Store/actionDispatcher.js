
export class CounterDispatcher  {

    addCounter(){
        return {type:'Add_Counter'}
    }
    resetCounter(){
        return {type:'Reset_Counter'}
    }
}