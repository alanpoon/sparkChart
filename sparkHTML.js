<style type='text/css'>
#${id}_result {	text-align: right;color: gray;min-height: 2em;} #${id}_table-sparkline {margin: 0 auto;border-collapse: collapse;}
#${id}_th {font-weight: bold;text-align: center;padding: 5px;    border-bottom: 1px solid silver;height: 20px;border-top: 2px solid gray;border-bottom: 2px solid gray;}
#${id}_td {padding: 5px;border-bottom: 1px solid silver;height: 20px;}
#${id}_thead_th {border-top: 2px solid gray;border-bottom: 2px solid gray;} 
 .highcharts-tooltip>span {background: white;border: 1px solid silver;border-radius: 3px;box-shadow: 1px 1px 2px #888;padding: 8px;}
 .ui-multiselect{padding:2px 0 2px 4px;text-align:left}.ui-multiselect span.ui-icon{float:right}.ui-multiselect-single .ui-multiselect-checkboxes input{position:absolute!important;top:auto!important;left:-9999px}.ui-multiselect-single .ui-multiselect-checkboxes label{padding:5px!important}.ui-multiselect-header{margin-bottom:3px;padding:3px 0 3px 4px}.ui-multiselect-header ul{font-size:.9em}.ui-multiselect-header ul li{float:left;padding:0 10px 0 0}.ui-multiselect-header a{text-decoration:none}.ui-multiselect-header a:hover{text-decoration:underline}.ui-multiselect-header span.ui-icon{float:left}.ui-multiselect-header li.ui-multiselect-close{float:right;text-align:right;padding-right:0}.ui-multiselect-menu{display:none;padding:3px;position:absolute;z-index:10000;text-align:left}.ui-multiselect-checkboxes{position:relative;overflow-y:auto}.ui-multiselect-checkboxes label{cursor:default;display:block;border:1px solid transparent;padding:3px 1px}.ui-multiselect-checkboxes label input{position:relative;top:1px}.ui-multiselect-checkboxes li{clear:both;font-size:.9em;padding-right:3px}.ui-multiselect-checkboxes li.ui-multiselect-optgroup-label{text-align:center;font-weight:700;border-bottom:1px solid}.ui-multiselect-checkboxes li.ui-multiselect-optgroup-label a{display:block;padding:3px;margin:1px 0;text-decoration:none}* html .ui-multiselect-checkboxes label{border:none}
</style>
<table id='dataGroup_${id}'></table>
<table id='${id}_table-sparkline'></table>    
  

<div class='elx-script'>
 var div =$("#${id}");
  var viewId=view.id;
 var k=view.typeinfo.data.fields.keys;
 var f=view.typeinfo.data.fields;
 
 var dataGroupKey=view.typeinfo.dataGroupKey;
var cToggleKey=view.typeinfo.cToggleKey;
var legendKey=view.typeinfo.legendKey;
var formatLegendCast=view.typeinfo.formatLegendCast;
var valueOperationKey=view.typeinfo.valueOperationKey;
var formatValueOperationCast=view.typeinfo.formatValueOperationCast;
var textValueKey=view.typeinfo.textValueKey;
var formatTextValueCast=view.typeinfo.formatTextValueCast;
var xTicksKey=view.typeinfo.xTicksKey;
var formatOrderingCast=view.typeinfo.formatOrderingCast;
var valuePrefix=view.typeinfo.valuePrefix;
var valueSuffix=view.typeinfo.valueSuffix;
var valueDecimals=view.typeinfo.valueDecimals;

	  var keys=[];
	k.forEach(function(d,i) {
    keys.push(d.name);})
  
  var columns=[]; var operations=[];
  var t=view.typeinfo.data.fields.operable.values;
    t.forEach(function(d,i) {
  columns.push(d.name);
    operations.push(d.op);
  })
  var addDataGroupFn,dataGroupClasses,addPeriodOptions,addSubPeriodOptions,dataGroupAvailClass;
	var periodSelect_val='month', subPeriodSelect_val,dataGroupUsed, cToggleType, smpGroupbySize;
	var periodSelect_el,subPeriodSelect_el;
	var chartPreGen;
   var Set_GroupFn1, Get_CategoryFn, chartGen, groupByFn,reduceCToggle, arrToHex1,hexToModel1, smpColName;
   var formatXTicksAndOrdering,sortByFixedGroupbyClass,autoDetectCategory;
   
  var model_TypeSplitClass,model_DataConvertClass,model_APIClass;
  var formatTextValueObj;
  debugFn();
  multiSelectFn(jQuery);// initalise multiSelect datagroup js
   if (view.data.jsonClass === "DataEmbedded"){ 
  rawdata=[
  ["Type1","2014-01-20","Alabama",71,68,3],
  ["Type1","2014-01-21","Alabama",45,28,2],
  ["Type1","2014-04-20","Alabama",36,41,5],
  ["Type1","2014-07-20","Alabama",52,32,4],
  ["Type1","2014-10-20","Alabama",22,25,4],
  ["Type1","2014-01-20","Alaska",45,28,2],
  ["Type1","2014-01-21","Alaska",36,41,5],
  ["Type1","2014-04-20","Alaska",52,32,4],
  ["Type1","2014-07-20","Alaska",71,68,3],
  ["Type1","2014-10-20","Alaska",45,28,2],
  ["Type2","2014-01-20","Alabama",710,680,30],
  ["Type2","2014-01-21","Alabama",450,280,20],
  ["Type2","2014-04-20","Alabama",360,410,50],
  ["Type2","2014-07-20","Alabama",520,320,40],
  ["Type2","2014-10-20","Alabama",220,250,40],
  ["Type2","2014-01-20","Alaska",450,280,20],
  ["Type2","2014-01-21","Alaska",360,410,50],
  ["Type2","2014-04-20","Alaska",520,320,40],
  ["Type2","2014-07-20","Alaska",710,680,30],
  ["Type2","2014-10-20","Alaska",450,280,20]
];
 
  rawdata=reduceCToggle(rawdata,view);
  var extendedArr=rawdata;
  var reduceCToggleArr=extendedArr;
  } else { rawdata=${data};  var extendedArr=extendArr(rawdata,f,view); var reduceCToggleArr=reduceCToggle(extendedArr,view);}
  
  console.log("rawdata",JSON.stringify(rawdata));
 var data1 = arrToHex1(reduceCToggleArr, f, view);
 console.log("data1",JSON.stringify(data1));
  var data2 = hexToModel1(data1, legendKey,formatLegendCast,view);
   console.log("data2",JSON.stringify(data2));
   
   addDataGroupFn(data2, 'category', dataGroupKey, '#dataGroup_' + viewId, viewId);
  
  
  
  
  function debugFn(){
     extendArr=function(data,f,view){
			//used when you want to use the same columns in operables
		//obtain uniq columnNames
		var colNameMap={};
		var uniqColName=[];
		var fieldsArr=getArr(f,'name',view);
		  //if(view.typeinfo.cToggleKey=='default') fieldsArr=_.rest(fieldsArr);
		console.log("fieldsArr",fieldsArr);
		var n=0;  //n is the index of unextended Arr
		for(var i=0;i< _.size(fieldsArr);i++){
		var colAsProperty =fieldsArr[i];

		//Obtaining colNameMap
		if (_.size(uniqColName)==0) {
		uniqColName.push(colAsProperty);
		colNameMap[colAsProperty]=i;
		n=n+1;
		} else {
			var colAsPropertyArr=[colAsProperty];
			var intersectArr=_.intersection(colAsPropertyArr,uniqColName);
			if (_.size(intersectArr)==0){
				uniqColName.push(colAsProperty);
				colNameMap[colAsProperty]=i;
				n=n+1;
				}
			}
		}

		//using colNameMap to extendArr
		var extendedArr=[];
		_.each(data ,function(k,l){
		//eg of k:[asd,34,34]
		var localArr=[];
			_.each(fieldsArr,function(o,p){
			var indexToChoose=colNameMap[o];
			localArr.push(k[indexToChoose]);
			});
			extendedArr.push(localArr);
		});
		return extendedArr;
	
	};
   reduceCToggle = function(data,view) { //remove the first element of all entries if cToggleKey is default
	var newData=[];
	  if(view.typeinfo.cToggleKey=='default') {
	  _.each(data,function(d){
	  newData.push(_.rest(d));
	  });
	  return newData;
	  } else return data;
  
  };
  arrToHex1 = function(data, f,view){
	  var keyLength = f.keys.length;
      var nameArr = getArr(f, 'name',view);
      var opArr = getArr(f, 'op',view);
      var idArr = getArr(f, 'id',view);
	      
  
	         var propertiesArr = [];
  if(view.typeinfo.cToggleKey =='cToggleEnabled'){ //cToggle Toggle the chart based on eikon filter
  //Console.log a existing cToggleType
  var cToggleTypeMaj=[];
  _.each(data,function(d) { cToggleTypeMaj.push(d[0]);});
  var cToggleTypeUniq=_.uniq(cToggleTypeMaj);
	var cToggleCount=  _.countBy(cToggleTypeMaj,function(types) {
	  var Ttype;
		_.each(cToggleTypeUniq,function(m){
		if (types == m) Ttype=m;
		});
		return Ttype;
	  });
	  console.info("cToggleCount Type",cToggleCount);
	  // initialize cToggleType
	  
		for (var propertyName in cToggleCount) {
		
		cToggleType= (typeof cToggleType=='undefined')? propertyName:(cToggleCount[cToggleType] >cToggleCount[propertyName]) ? cToggleType:propertyName;
		}
  var keyArr = _.first(nameArr, keyLength+1);
      var colArr = _.last(nameArr, nameArr.length - (keyLength+1));
      var nameArr = _.map(colArr, function(num, i) {
          return opArr[i] + "(" + num + ")";
      });
	   nameArr = keyArr.concat(nameArr);
      var keyLArr = d3.range(0, keyLength+1); //plus 1 because of cToggle
	    keyLArr.forEach(function(d, i) {
          var obj = (i == 0) ? '#{cToggle}': (i == 1)?'#{xaxis}' : '#{groupby' + (i-1) + '}';
          propertiesArr.push(obj);
      })
  } else if(view.typeinfo.cToggleKey =='default')
   {
		nameArr=_.rest(nameArr); //remove the first element which is the cToggleType
		var keyArr = _.first(nameArr, keyLength);
         var colArr = _.last(nameArr, nameArr.length - keyLength);
		 console.log("keyArr: ",keyArr,"  , colArr",colArr);
      var nameArr = _.map(colArr, function(num, i) {
          return opArr[i] + "(" + num + ")";
      });
	   nameArr = keyArr.concat(nameArr);
    var keyLArr = d3.range(0, keyLength); 
	    keyLArr.forEach(function(d, i) {
          var obj = (i == 0) ?'#{xaxis}' : '#{groupby' + i + '}';
          propertiesArr.push(obj);
      })
   }
      
      idArr.forEach(function(d, i) {
          propertiesArr.push("#[" + d + "]");
      })
      console.log("propertiess", JSON.stringify(propertiesArr));
      var combineArr = [];
      propertiesArr.forEach(function(d, i) {
          var obj = nameArr[i] + d;
          combineArr.push(obj);
      })
      console.log("combineArrAS", JSON.stringify(combineArr));
      var globalArr = [];
      data.forEach(function(d, i) {
          var localObj = _.object(combineArr, d);
          globalArr.push(localObj);
      })
      return globalArr;
  
  };
hexToModel1 = function(data, legendKey,formatLegendCast,view) {
    var ReadArray, columnNameArray, model_keyArray, objKey;
    ReadArray = [];
  
    objKey = Object.keys(data[0]);
	model_keyArray = [];
    columnNameArray = [];
	var keyArray=[];
  //legendFormating
  var formatLegend; //formatLegend should be a class containing the Legend format for each model 
  if (formatLegendCast==="" && legendKey==="formatLegend")
   console.info("Enter formatLegend");
   if (legendKey==="formatLegend" ) {
  console.info("proceed");
    eval(formatLegendCast);} 
     if (view.typeinfo.data.fields.operable.values[0].id==="columnInducedGroupby.L1" 
  && formatLegendCast==="")
  {
  
  formatLegend={'columnInducedGroupby.L1': function(dataZero) {   return dataZero.columnNameWithoutOp;   } };
  }
  
  //-end legendFormating
    objKey.forEach(function(key) {
        var columnNameObj, model_keyObj;
		if ( (key.contains("|")==false) &&(key.contains("#{")==false)) {
			keyArray.push(key);
			} else {
            return;
        }
      
		
    });
	console.log("inside keyArray",JSON.stringify(keyArray));
    data.forEach(function(d, i) {
        var Category, ColumnName, GroupNameArr, Model, ReadObj, Value, lastGroupby, propertyName;
        ReadObj = {};
        Value = void 0;
        ColumnName = void 0;
        Category = void 0;
        Model = void 0;
        lastGroupby = void 0;
        GroupNameArr = [];
        for (propertyName in d) {
            if (propertyName.contains("xaxis") === true) {
                Category = d[propertyName];
            }
            if (propertyName.contains("groupby") === true) {
                lastGroupby = d[propertyName];
                GroupNameArr.push(lastGroupby);
            }
        }
  		var dataZero=[];
          keyArray.forEach(function(modelKey,n) {
            var allGroupby, cName, lastGroupby_op, model_keyObj, model_keyObjArr, model_yAxisObj, objPush;
            for (propertyName in d) {
                if (propertyName.contains(modelKey) === true) {
                    model_keyObj = propertyName.replace(/.*\[|\]/g, "");
                    model_keyObjArr = model_keyObj.split(".");
                    model_yAxisObj = (model_keyObjArr.length > 1 ? model_keyObjArr[1] : "L1");
                    cName = propertyName.replace(/\#.*/, "");
                  // for taking string in brackets
                  var regExp = /\(([^)]+)\)/;
				  var matches=regExp.exec(cName);
                  columnNameWithoutOp=matches[1];
                  opName=cName.split("(")[0];
                  //-end
                    objPush = {
                        model: model_keyObjArr[0],
                        yAxis: model_yAxisObj,
                        columnName: cName,
  						columnNameWithoutOp:columnNameWithoutOp,
  						opName:opName,
                        value: d[propertyName],
                        category: Category
                    };
                    GroupNameArr.forEach(function(d, m) {
  					    propertyName = "groupby" + (m + 1);
                        objPush[propertyName] = d;
                    });
  					if (legendKey === "lastGroupby_op") {
                        lastGroupby_op = lastGroupby + "_" + cName;
                        objPush["legendKey"] = lastGroupby_op;
                        ReadArray.push(objPush);
                    } else if (legendKey === "allGroupby") {
                        allGroupby = GroupNameArr.join("_");
                        objPush["legendKey"] = allGroupby;
                        ReadArray.push(objPush);
                    } else if (legendKey == "op(ColumnName)") {
                        objPush["legendKey"] = cName;
                        ReadArray.push(objPush);
                      } else if (legendKey=="formatLegend"){
					  if (i==0) console.log("objPush for Legend",JSON.stringify(objPush));
                          objPush["legendKey"] = formatLegend[model_keyObj](objPush);
  						ReadArray.push(objPush);
                      }
    						else if (legendKey == "ColumnName") {
                        var regExp = /\(([^)]+)\)/;
                        var matches = regExp.exec(cName);
                        objPush["legendKey"] = matches[1];
                        ReadArray.push(objPush);
                    }
                }
            }
        });
    }); 
    return ReadArray; 
};
groupByFn = function(data, groupByArr) {
	var aggreData, nest;
	nest = d3.nest();
	aggreData = [];
	_.each(groupByArr, function(m, n) {
	nest.key(function(d) {
	return d[m];
	});
	});
	var result=[];
	nest.rollup(function(d) {
	var sampleObj=_.clone(d[0]);
	var sumValue=d3.sum(d, function(g) {return g.value; });
	sampleObj['value']=sumValue;
	result.push(sampleObj);
	}).entries(data);
	return result;
};

  formatXTicksAndOrdering= function(modelData,view) {
  //Data preProcess
  var formatScale;
  var testArray=["2012-11-25","Jan","Peter","Jan-2014"];
  var sampleCategory=modelData[0].category;
  var autoDetectArray=['parsableDate','month'];
  var detected;
  var detected2='month';
  _.each(autoDetectArray,function(d,i) {
  if (autoDetectCategory[d](sampleCategory)) detected=d; 
   });
  
  for (var i=0;i< autoDetectArray.lenth;i++){
  var j=autoDetectArray[i];
  if (autoDetectCategory[j](sampleCategory)) {detected=d; 
   break;}
  }
   if (typeof detected =='undefined') detected ='normal';
 var formatXTicks,formatOrdering; 
  
var objPushCount=0;
  var autoArr=[];

  switch(orderingKey){
  case 'formatOrderingCast': eval(formatOrderingCast);break;
  case 'alphabetical' :break;
  case 'monthString' :formatOrdering=function (d) { 
  var arr=d.category;
  var date=new Date(arr+' 15, 2014');return date.getTime()/1000}; break;
  case 'year-month' :formatOrdering=function(d){var arr=(d.category).split('-');
  var date=new Date(arr[1]+' 15,'+arr[0]);return date.getTime()/1000}; break;
  case 'month-year' :formatOrdering=function(d) {var arr=(d.category).split('-');
  var date=new Date(arr[0]+' 15,'+arr[1]);return date.getTime()/1000}; break;
  case 'year-quarter' : formatOrdering=function(d) {
  var arr=(d.category).split('-');
  var monthValue=(parseInt(arr[1].split("Q")[1]))*3;
  var monthArr=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  console.log("before monthValue",monthValue);
  var date=new Date(monthArr[monthValue-1]+' 15,'+arr[0]);return date.getTime()/1000
  }; break;
    case 'year-year':formatOrdering=function(d){
	return parseInt(d);
  }; break;
  case 'date': formatOrdering=function(d) {
    return (new Date(d.category)).getTime()/1000;
    };break;
  case 'valueAscending':formatOrdering=function(d) {
    return d.value;  }; break;
  case 'valueDescending':formatOrdering=function(d) {
  return -d.value;}; break;
  case 'default':break;
  }
  
  if(xTicksKey.contains("%")){
  formatXTicks=function(val){ var date= new Date(val); var formatter=d3.time.format(xTicksKey); return formatter(date);};
  } else if (xTicksKey=='formatXTicksCast') {eval(formatXTicksCast);} else formatXTicks=function(val) {return val;};

    var colNameNest = d3.nest().key(function(d) {return d.columnName;})
  .rollup(function(d) {
  
  _.each(d,function(record,objPushCount) {
   var autoObj=record;
    if (objPushCount ==0) console.log("objpush for Formating Order",JSON.stringify(record));
  
    if (typeof formatOrdering!=='undefined'){
   autoObj['ordering']=formatOrdering(record); 
    } 
  
  if (typeof formatXTicks!=='undefined') {

    autoObj['category']=formatXTicks(record.category);
  }
  autoArr.push(autoObj);
  
  });
  return ;
  })
  .entries(modelData);	
  
  return autoArr;
  };
  
  sortCategory= function(orderedData){
  //orderedData contains 'ordering' as a property
  //sortedData is sorted according to the ordering
  if( typeof orderedData[0].ordering!=='undefined') {
    var sortedData=[];
  var sortNest = d3.nest().key(function(d) {return d.columnName;}).rollup(function(d) {
  var orderedByColName=d.sort(function(a,b) {
  return a.ordering-b.ordering;
  }); 
  _.each(orderedByColName,function(d){
  sortedData.push(d);
  });
  return;
  }).entries(orderedData);
  return sortedData;
} else return orderedData;
  };
   autoDetectCategory={
  "parsableDate":function(d) {
  //accepts "yyyy-mm-dd","Jul 20,2014"
  var date=new Date(d);
  return date instanceof Date && !isNaN(date.valueOf());
       },
  "month":function(d) { var date=new Date(d+" 2,2014");
  console.log("date",date);
  return date instanceof Date && !isNaN(date.valueOf());}
  };
  interpolateData=function(data5,tDomainDate) {
var yearFormat=d3.time.format("%Y");
			var minYear=yearFormat(tDomainDate[0]); 
			console.log("minYear",minYear);
			var maxYear= yearFormat(tDomainDate[1]);
			var yearRange=_.range(parseInt(minYear),(parseInt(maxYear)+1));
			console.log("yearRange:",yearRange, "subPeriodSelect_val:", subPeriodSelect_val);
 var periodInterpolateClass={
	 "month":function(yearRange,subPeriodSelect_val){ var interpolateArr=[]; _.each(yearRange,function(m) {
	 _.each(subPeriodSelect_val,function(k){ interpolateArr.push(m+"-"+k);});
	 }); return interpolateArr;},
	"quarter":function(yearRange,subPeriodSelect_val){ var interpolateArr=[]; _.each(yearRange,function(m) {
	 _.each(subPeriodSelect_val,function(k){ interpolateArr.push(m+"-"+k);});
	 });return interpolateArr;},
	 "year":function(yearRange,subPeriodSelect_val){ 
	 return subPeriodSelect_val;
	 }
 };
 var result=data5;
 d3.nest().key(function(d,i) { return d.groupby1+"_"+d.columnName;})
			.rollup(function(d,i) { 
			var existingCategory=_.uniq(_.pluck(d,'category'));
			var differenceCategory=_.difference(periodInterpolateClass[periodSelect_val](yearRange,subPeriodSelect_val),existingCategory);
			console.log("beef differenceCategory",differenceCategory);
			
			
			var interpolatedData=[];
			_.each(differenceCategory,function(m){
			var sampleObj=_.clone(d[0]);
			console.log("beef sampleObj",sampleObj,"m:",m);
			sampleObj['category']=m;
			sampleObj['value']=0;
			sampleObj['tColSubPeriod']=(_.str.include(m,'-')) ? m.split("-")[1] :m;
			interpolatedData.push(sampleObj);
			});
			
			result=_.union(result,interpolatedData);
			console.log("teef interpolatedData",JSON.stringify(interpolatedData));
			console.log("teef result",JSON.stringify(result));
			})
			.entries(data5);
			return result;
 };
chartPreGen=function(data3,tDomainDate){
//interpolate data3 by month
 
var data4=[];
	var nestBy=d3.nest().key(function(d,i) {return d.category+"_"+d.groupby1+"_"+d.columnName;})
						.rollup(function(d,i) { var sampleObj=_.clone(d[0]); var sumValue=sum(_.pluck(d,'value'));
												sampleObj['value']=sumValue;
						data4.push(sampleObj);
					 }).entries(data3);
		  var data5=interpolateData(data4,tDomainDate);
		    console.log("data5",JSON.stringify(data5));
	  var data6=formatXTicksAndOrdering(data5,view);
		
		
		  console.log("data6",JSON.stringify(data6));
			var data7=sortCategory(data6);
			console.log("data7",JSON.stringify(data7));
	//Append preparation

//[{"model":"spline","yAxis":"1","columnName":"sum(Income)","columnNameWithoutOp":"Income","opName":"sum","value":116,"category":"2014-Jan","groupby1":"Alabama","legendKey":"Alabama_sum(Income)","tColSubPeriod":"Jan"}]		
	var sparkNest=d3.nest().key(function(d,i){return d.groupby1;})
							.key(function(d,i){return d.columnName;})
							.map(data7,d3.map);
//first colProperty
var colPropertyCount=0;
var toCategoryArray;
	var chartObj={};
	for (var propertyName in sparkNest) {
	//yAxis here is used to decide formula to use on the textFormat
	chartObj[propertyName]={'data':[],'chartType':[],'yAxis':[]};
	for (var colProperty in sparkNest[propertyName]) {
	var arr=_.pluck(sparkNest[propertyName][colProperty],'value');
	chartObj[propertyName]['data'].push(arr);
	var chartModel=sparkNest[propertyName][colProperty][0]['model'];
	chartObj[propertyName]['chartType'].push(chartModel);
		var chartYaxis=sparkNest[propertyName][colProperty][0]['yAxis'];
	chartObj[propertyName]['yAxis'].push(chartYaxis);
	if(colPropertyCount==0) toCategoryArray=_.pluck(sparkNest[propertyName][colProperty],'category');
	}
	}
console.log("teef sparkNest",JSON.stringify(sparkNest));		
console.log("teef chartObj",JSON.stringify(chartObj));	
//
					
//append to the selector
$('#${id}_table-sparkline').empty();
var table_Spark=d3.select('#${id}_table-sparkline');
var table_Body=table_Spark.append("tbody").attr("id",viewId+'_tbody-sparkline');
var table_Head=table_Spark.append("thead").attr("id",viewId+'_thead_th').append('tr');




var nRowsArr=[];
var nRowsNest=d3.nest().key(function(d,i) {return d.groupby1;}).rollup(function(d,i) {nRowsArr.push(d[0].groupby1);}).entries(data7);
_.each(nRowsArr,function(m,i) { table_Body.append("tr").attr("id","bodyTag"+m).append("th").attr("id","${id}_th").text(m);});

var nHeadArr=(view.typeinfo.header).split(',');
_.each(nHeadArr,function(m,i) {table_Head.append("th").attr("id","${id}_th").text(m); });

var valueObj=formatTextValueObj(chartObj,textValueKey,formatTextValueCast);
var firstChartProperty=nRowsArr[0];
_.each(nRowsArr,function(d,i) {
var bodyTag = table_Body.select('#bodyTag'+d);
	_.each(valueObj[d],function(m,n) { bodyTag.append("td").attr("id","${id}_td").text(m);
	bodyTag.append("td").attr("id","${id}_td").attr("data-sparkline",chartObj[d]['data'][n].join(" ,")+chartObj[d]['chartType'][n])
						.attr("name",d);
	});
});

chartGen(toCategoryArray);
};
chartGen=function(toCategoryArray){
  Highcharts.SparkLine = function (options, callback) {
        var defaultOptions = {
            chart: {
                renderTo: (options.chart && options.chart.renderTo) || this,
                backgroundColor: null,
                borderWidth: 0,
                type: 'area',
                margin: [2, 0, 2, 0],
                width: 120,
                height: 20,
                style: {
                    overflow: 'visible'
                },
                skipClone: true
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
			categories:toCategoryArray,
			    labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickPositions: []
            },
            yAxis: {
                endOnTick: false,
                startOnTick: false,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                tickPositions: [0]
            },
            legend: {
                enabled: false
            },
            tooltip: {
                backgroundColor: null,
                borderWidth: 0,
                shadow: false,
                useHTML: true,
                hideDelay: 0,
                shared: true,
                padding: 0,
                positioner: function (w, h, point) {
                    return { x: point.plotX - w / 2, y: point.plotY - h};
                }
            },
            plotOptions: {
                series: {
                    animation: false,
                    lineWidth: 1,
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    marker: {
                        radius: 1,
                        states: {
                            hover: {
                                radius: 2
                            }
                        }
                    },
                    fillOpacity: 0.25
                },
                column: {
                    negativeColor: '#910000',
                    borderColor: 'silver'
                }
            }
        };
        options = Highcharts.merge(defaultOptions, options);

        return new Highcharts.Chart(options, callback);
    };

    var start = +new Date(),
        $tds = $("td[data-sparkline]"),
        fullLen = $tds.length,
        n = 0;
	
    // Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
    // can take some seconds, so we split the input into chunks and apply them in timeouts
    // in order avoid locking up the browser process and allow interaction.
    function doChunk(toCategoryArray,valueDecimals,valuePrefix,valueSuffix) {
	console.log("jess toCategoryArray",toCategoryArray);
        var time = +new Date(),
            i,
            len = $tds.length;

        for (i = 0; i < len; i++) {
            var $td = $($tds[i]);
			var name=$td.attr('name');
            var stringdata = $td.data('sparkline'),
                arr = stringdata.split('; '),
                data = $.map(arr[0].split(' ,'), parseFloat),
				
                chart = {};

            if (arr[1]) {
                chart.type = arr[1];
            }
            $td.highcharts('SparkLine', {
			xAxis:{
			categories:toCategoryArray
			},
                series: [{
				name:name,
                    data: data
                }],
                tooltip:{
				  valueDecimals: valueDecimals,
            valuePrefix: valuePrefix,
            valueSuffix: valueSuffix
	
                },
				
                chart: chart
            });

            n++;
            
            // If the process takes too much time, run a timeout to allow interaction with the browser
            if (new Date() - time > 500) {
                $tds.splice(0, i + 1);
                setTimeout(doChunk, 0);
                break;
            }

            // Print a feedback on the performance
            if (n === fullLen) {
                $('#result').html('Generated ' + fullLen + ' sparklines in ' + (new Date() - start) + ' ms');
            }
        }
    }
    doChunk(toCategoryArray,valueDecimals,valuePrefix,valueSuffix);
    

};
//--Used in valueOperating
operation=function(ABvalue){
	for (var k=0; k< _.size(Object.keys(ABvalue)); k++)
	{ var key=Object.keys(ABvalue)[k];
		this[key]=ABvalue[key]; //declare this.A and this.B as a value
	}
};
operationProcesser=function(vObj){ 
	//vObj={A:[...],B:[...]};
	//for each record, process operation.prototype.value once
	
	//convert key:?id:A/ into just 'A'
	for(var propertyName in vObj) {
	var shortForm=propertyName.substring(propertyName.lastIndexOf("?id:")+4,propertyName.lastIndexOf("/"));
	vObj[shortForm]=vObj[propertyName];
	delete vObj[propertyName];
	}
	var ABargument=Object.keys(vObj);

	//new propertyValue 'processedValue' for vObj
	vObj['processedValue']=[];
	
	var firstABargument=ABargument[0]; //causes the sampleObj to take Object property from ?id:A/
	
for (var i=0;i < _.size(vObj[firstABargument]);i++) {
		var ABvalue={};
		_.each(ABargument,function(m){
		ABvalue[m]=vObj[m][i].value;
		});
		
		var method=new operation(ABvalue);
		_.each(valueOpArr,function(arg,n){
		
		var sampleObj=_.clone(vObj[arg][i]);
		var beforeId=(sampleObj.model).split("?id")[0];
		var afterId=(sampleObj.model).split("/")[1];
		sampleObj['value']=method.value()[n];
		sampleObj['model']=beforeId+afterId;
		vObj['processedValue'].push(sampleObj);
		});
	
	}
		//console.log("sampleObj",JSON.stringify(sampleObj));
	return vObj['processedValue'];

};

valueOperating=function(modelData,valueOperationKey,formatValueOperationCast){
	if (valueOperationKey==='formatValueOperation')
	eval(formatValueOperationCast);
	var uniqModel=_.uniq(_.pluck(modelData,'model'));
	var valueOpArr=[]; //property names that contains ?id:/ eg. ?id:A/
	var shortOpArr=[]; //eg. A
		_.each(uniqModel,function(m,n) {
		if (_.str.include(m,'?id')) {valueOpArr.push(m);
		//if (m.contains("?id")==true) {valueOpArr.push(m);
			}
		});
		var vObj={};
		var filterSize,inducedArr;
		_.each(valueOpArr,function(m,n){
		var filteredOp=_.where(modelData,{model:m});
		filterSize=_.size(filteredOp);
		vObj[m]=filteredOp;
		});
	
	var newVObj=operationProcesser(vObj);
	return (valueOperationKey==='formatValueOperation')? newVObj:modelData;
};
//--end valueOperating
  //--Data Grouping Tab
    addDataGroupFn = function(modelData, tCol, dataGroupKey, dataGroupHex, viewId) {
		console.log("dataGroupKey",dataGroupKey);
		      var tDomainDate = setTDomain1(modelData, tCol);
			console.log("tDomainDate",tDomainDate);
        if (dataGroupKey === 'timePeriodOptions') {
			
            var dataGroupContent = d3.select(dataGroupHex);
            dataGroupContent.append("td")
                .append("select").attr("id", 'periodSelect_' + viewId);
            dataGroupContent.append("td").append("select").attr("id", 'subPeriodSelect_' + viewId)
                .attr("title", 'Basic example')
                .attr("multiple", "multiple")
                .attr("size", 5);
			
      
            var periodSelect_hex = '#periodSelect_' + viewId;
			console.log("front periodSelect_el",$(periodSelect_hex));
            var subPeriodSelect_hex = '#subPeriodSelect_' + viewId;
            addSubPeriodOptions(modelData, tDomainDate, tCol, 'month', subPeriodSelect_hex);
            periodSelect_el = $(periodSelect_hex).multiselect({
                selectedList: 1,
                multiple: false,
                click: function(event, ui) {
                    periodSelect_val = [ui.value];
                    //clear options in subPeriodSelect
                    $(subPeriodSelect_hex).empty();
                    //add options in subPeriodSelects
                       	updateSubPeriodOptions(modelData,tDomainDate,tCol,subPeriodSelect_hex);
                },
				minWidth:100

            });
			console.log("periodSelect_el",periodSelect_el);
            addPeriodOptions(periodSelect_el);
	
        } else {
	
		$(periodSelect_hex).empty();
		$(subPeriodSelect_hex).empty();
		chartPreGen(modelData,tDomainDate);
		
		}
    };
	dataGroupUsed = function(modelData, tCol,subPeriodSelect_val) {
	//reassign orderingKey
	
	orderingKey='year-'+periodSelect_val;
	console.log("orderingKey in dataGroupUsed",orderingKey);
        var periodFilterClass = {
            'month': function(date) {
                var monthFormat = d3.time.format("%b");
                return monthFormat(date);
            },
            'year': function(date) {
                console.log("now is year", date.getFullYear());
                return date.getFullYear();

            },
            'quarter': function(date) {
                return 'Q' + getQuarter(date);
            }
        };
		var dataGroupCategoryClass={
		     'month': function(date) {
                var monthFormat = d3.time.format("%Y-%b");
                return monthFormat(date);
            },
            'year': function(date) {
                console.log("now is year", date.getFullYear());
                return date.getFullYear();

            },
            'quarter': function(date) {
                return date.getFullYear()+'-Q' + getQuarter(date);
            }
		};
        var filteredData = [];
        var subPeriodData = _.map(modelData, function(num, key) {
            var sampleObj = _.clone(num);
            var toColSubPeriodVal = periodFilterClass[periodSelect_val](new Date(sampleObj[tCol]));
            sampleObj['tColSubPeriod'] = ($.isNumeric(toColSubPeriodVal)) ? toColSubPeriodVal.toString() : toColSubPeriodVal;
			var dataGroupCategoryVal=dataGroupCategoryClass[periodSelect_val](new Date(sampleObj[tCol]));
			sampleObj['category'] =($.isNumeric(dataGroupCategoryVal)) ? dataGroupCategoryVal.toString() : dataGroupCategoryVal;
            return sampleObj;
        });
        _.each(subPeriodSelect_val, function(m) {
            filteredData = _.union(filteredData, _.where(subPeriodData, {
                'tColSubPeriod': m
            }));
        });
      // group the data by category and aggregate the 'value' column
		var groupCount=0;
	for (var property in filteredData[0]) {
	if (_.str.include(property,'groupby')) groupCount++;
	}
		var groupbyRange=_.map(_.range(1,groupCount+1),function(m){ return 'groupby'+m;});
		var groupByArr=['model','category','columnName'];
		var groupByArr=_.union(groupByArr,groupbyRange);
		
		var aggregateData=groupByFn(filteredData,groupByArr);
		return aggregateData;
    };
	 addPeriodOptions = function(periodSelect_el) {
        _.each(['month', 'year', 'quarter'], function(m) {
            var opt = $('&lt;option /&gt;', {
                value: m,
                text: m

            });
            opt.appendTo(periodSelect_el);
        });
		console.log("add Period",periodSelect_el);
        periodSelect_el.multiselect('refresh');
    };
    updateSubPeriodOptions = function(modelData, tDomainDate, tCol, subPeriodSelect_hex) {
        var updatesubPeriodSelect_el = $(subPeriodSelect_hex);
        var subPeriodArr = dataGroupAvailClass[periodSelect_val](tDomainDate[0], tDomainDate[1]);
        _.each(subPeriodArr, function(m) {

            var opt = $('&lt;option /&gt;', {
                value: ($.isNumeric(m)) ? m.toString() : m,
                text: m,
                selected: 'selected'
            });
            opt.appendTo(updatesubPeriodSelect_el);
        });
		console.log("updatesubPeriodSelect_el",updatesubPeriodSelect_el);
        updatesubPeriodSelect_el.multiselect('refresh');
    };
    addSubPeriodOptions = function(modelData, tDomainDate, tCol,periodSelect_val, subPeriodSelect_hex) {
        subPeriodSelect_el = $(subPeriodSelect_hex).multiselect({

            selectedText: function(numChecked, numTotal, checkedItems) {
			console.log("help");
                subPeriodSelect_val = $.map(checkedItems, function(checkbox) {
                    return checkbox.value;
                });
                console.log("subPeriodSelect_val _sel", subPeriodSelect_val);
                console.log("jok modelData",JSON.stringify(modelData));
                var groupedData = dataGroupUsed(modelData, tCol,subPeriodSelect_val); //data filtered by subPeriodselected_val
				 groupedData=valueOperating(groupedData,valueOperationKey,formatValueOperationCast);
				
				 if (_.size(groupedData)==0) groupedData =[{model:'column',category:'2012-06-20',yAxis:'L1'}];
				chartPreGen(groupedData,tDomainDate);
                
                return subPeriodSelect_val.join(", ");
            },

            uncheckAll: function() {
                subPeriodSelect_val = [];
               var groupedData = dataGroupUsed(modelData, tCol,subPeriodSelect_val);
			   groupedData =valueOperating(groupedData,valueOperationKey,formatValueOperationCast);
			   if (_.size(groupedData)==0) groupedData =[{model:'column',category:'2012-06-20',yAxis:'L1'}];
			   chartPreGen(groupedData,tDomainDate);
               
            },minWidth:400

        });
        var subPeriodArr = dataGroupAvailClass[periodSelect_val](tDomainDate[0], tDomainDate[1]);
        console.log("subPeriodArr", subPeriodArr);
        subPeriodSelect_val = subPeriodArr;
        _.each(subPeriodArr, function(m) {

            var opt = $('&lt;option /&gt;', {
                value: ($.isNumeric(m)) ? m.toString() : m,
                text: m,
                selected: 'selected'
            });
            opt.appendTo(subPeriodSelect_el);
        });
		console.log("subPeriodSelect_el",subPeriodSelect_el);
        subPeriodSelect_el.multiselect('refresh');
    };
    dataGroupAvailClass = { //return the available options in each type of dataGroup as an array
        'month': function(minDate, maxDate) {
            var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var mDiff = monthDiff(minDate, maxDate);
            if (mDiff < 12) {
                var newMonthName = [];
                var minDateIndex = minDate.getMonth();
                _.each(_.range(minDateIndex, minDateIndex + mDiff), function(m) {
                    var listed = m % 12;
                    newMonthName.push(monthName[listed]);
                });
            }
            return monthName;
        },
        'year': function(minDate, maxDate) {
            return _.range(minDate.getFullYear(), maxDate.getFullYear() + 1);
        },
        'quarter': function(minDate, maxDate) {
            var quarterArr = [];
            var qMin = getQuarter(minDate);
            var qDiff = quarterDiff(minDate, maxDate);
            if (qDiff < 4) {
                _.each(_.range(qMin, qMin + qDiff + 1), function(m) {
                    quarterArr.push('Q' + m);
                });
            }
            return  ['Q1', 'Q2', 'Q3', 'Q4'];
        }

    };
	//--end Data Grouping Tab
	
	//specific for sparkchart
	formatTextValueObj=function(chartObj,textValueKey,formatTextValueCast) {
	var formatTextValue;
	var textValue;
	switch (textValueKey) {
	case 'sum': formatTextValue=function(arr) {return sum(arr);}; break;
	case 'average': formatTextValue=function(arr) {return average(arr);}; break;
	case 'formatTextValueCast' : eval(formatTextValueCast);
	}
	var valueObj={};
	if(textValueKey=='formatTextValueCast') {
	for (var propertyName in chartObj) {
	valueObj[propertyName]=[];
	_.each(chartObj[propertyName]['data'],function(d,i) {
	valueObj[propertyName].push(formatTextValue[chartObj[propertyName]['yAxis'][i]](d));
	});
	}
	}
	else{
	
	for (var propertyName in chartObj) {
	valueObj[propertyName]=[];
	_.each(chartObj[propertyName]['data'],function(d,i) {
	valueObj[propertyName].push(formatTextValue(d));
	});
	}
}	return valueObj;
	};
	//end specific for sparkchart
  }
  //helper function for data grouping multiselect
	function setTDomain1(modelData, tCol) {

    var yearFormat = d3.time.format("%Y");
    var monthFormat = d3.time.format("%b");
    //getting first day
    var dayArr = _.pluck(modelData, tCol);
    var epochArr = _.map(dayArr, function(d) {
        var date = new Date(d);
        return date.getTime();
    });
    
    var min = _.min(epochArr);
    
    var roundMin = new Date(min);
    var minMonth = monthFormat(roundMin);
    var minYear = yearFormat(roundMin);
    var minDate = new Date(minMonth + ' 1,' + minYear);

    var max = _.max(epochArr);
    var roundMax = new Date(max);
    var maxMonth = monthFormat(roundMax);
    var maxYear = yearFormat(roundMax);
    var maxDate = new Date(maxMonth + ' 1,' + maxYear);
    var domainArr = [minDate, maxDate];
    var domainArr = [roundMin, roundMax];
    //--
    return domainArr;

}
	function monthDiff(firstDate, secondDate) {
    var months;
    months = (secondDate.getFullYear() - firstDate.getFullYear()) * 12;
    months -= firstDate.getMonth();
    months += secondDate.getMonth();
    return months <= 0 ? 0 : months;
}
	
function getQuarter(d) {
  d = d || new Date();
  var m = Math.floor(d.getMonth()/3) + 1;
  return m > 4? m - 4 : m;
}
	function quarterDiff(firstDate,secondDate){
	var mDiff=monthDiff(firstDate,secondDate);
	var qDiff=(mDiff>=12) ? 4:getQuarter(secondDate)-getQuarter(firstDate);
	return qDiff;
	}
	function yearDiff(firstDate,secondDate){
	return secondDate.getFullYear()-firstDate.getFullYear();
	}
	//--end helper function for data grouping multiselect
function sum(arr) {
    return d3.round(_.reduce(arr, (function(memo, num) {
        return memo + num;
    }), 0),2);
};

 function average(arr) {
    return d3.round(_.reduce(arr, function(memo, num) {
        return memo + num;
    }, 0) / arr.length,2);
};
</div>