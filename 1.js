function check(){
    if(reg.username.value == ""){
      alert("未輸入姓名");
      return false;
    }
    else if(reg.phone.value == ""){
      alert("未輸入電話");
      return false;
    }
    else if(reg.address.value == ""){
      alert("未輸入寄件地址");
      return false;
    }
    else if(!reg.sex[0].checked && !reg.sex[1].checked && !reg.sex[2].checked){
      alert("未選擇性別");
      return false;
    }
    else
      alert("成功送出");
      reg.submit();
    
  }
  