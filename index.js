function User()
{
  var self=this;
  this.firstname=new Rx.BehaviorSubject("qing");
  this.lastname=new Rx.BehaviorSubject("tian");
  this.fullname=Rx.Observable.combineLatest([this.firstname,this.lastname], function (x,y) {
      return x+" "+y;
  });
  this.fullname.subscribe(x=>{
  	$("#fullname").val(x);
  });
  $("#firstname").on("change",function(e){
  	self.firstname.onNext($(e.target).val());
  });
  $("#lastname").on("change",function(e){
  	self.lastname.onNext($(e.target).val());
  });
}

$(document).ready(function(){
	var user=new User();
});


  //更新和响应事件
  // run(main,drivers);
  // run(model(),DomDriver);
  // var proxyDomSource=new Rx.Subject();//中间
  // const DomSource=DomDriver(proxyDomSource);//影响者
  // const sinks=mainFn(DomSource);//取得
  // sinks.subscribe(x=>{
  // 	proxyDomSource.onNext(DomSource);
  // });
  //const DomSource=Rx.Observable.fromEvent(document,"click");
  // const DomSource={
	 //  selectEvents:function(tagName,eventType)
	 //  {
	 //       return Rx.Observable.fromEvent(document,eventType).filter(ev=>ev.target.tagName===tagName.toUpperCase())
	 //  }
  // };
  // return DomSource;

    // var proxyDomSource=new Rx.Subject();//中间
  // const sinks=mainFn(proxyDomSource);//取得
  // const DomSource=dirvers.Dom(sinks);//影响者
  // DomSource.subscribe(click=>{
  //   proxyDomSource.next(DomSource)
  // });