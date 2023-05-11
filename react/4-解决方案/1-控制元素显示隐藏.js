/**
 * React控制元素显示和隐藏的方法目前我知道的有三种方法：
    第一种是通过state变量来控制是否渲染元素，类似vue中的v-if。
    第二种是通过style控制display属性，类似vue 中的v-show。
    第三种是通过动态切换className。
 */
    // 第一种方法是通过此例中showElem变量来控制是否加载元素的，如果showElem为false，内容是直接不会渲染的。
    class Demo extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                showElem:true
            }
        }
        render(){
            return (
                <div>
                    {
                        this.state.showElem?(
                            <div>显示的元素</div>
                        ):null
                    }
                </div>
            )
        }
    }

    // 通过display属性来控制元素显示和隐藏。
    class Demo extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                showElem:'none'
            }
        }
        render(){
            return (
                <div style={{display:this.state.showElem}}>显示的元素</div>
            )
        }
    }

    // 通过className切换hide来实现元素的显示和隐藏。
    class Demo extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                showElem:true
            }
        }
        render(){
            return (
                <div>
                    {/* 写法一 */}
                    <div className={this.state.showElem?'word-style':'word-style hide'}>显示的元素</div>
                    {/* 写法二 */}
                    <div className={`${this.state.showElem?'':'hide'} word-style`}>显示的元素</div>
                </div>
            )
        }
    }

    /**
     * 要注意的是，这几种方法也有使用的区别：
        方法一不适合频繁控制显示隐藏的情况，因为他会重新渲染元素，比较耗费性能。在这种情况下，第二种或者第三种通过display来控制会更合理。
        方法一适合安全性高的页面，比如用户信息页面，根据不同的用户级别显示不一样的内容，这时候如果你用方法一或者方法二的话，用户如果打开network还是可以看见，因为页面还是渲染了，只是隐藏了而已。而方法一是直接不渲染用户信息的DOM元素，保证了安全性。
    */
   