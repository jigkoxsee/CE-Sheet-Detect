//this function use for compare site by site
function testttt(id){
    //alert(id);

}
function sheet_detection(webpage_file,sj_id){
    $.get(webpage_file,
        function(data) {
            var allsheet=new Array();

            document.write(data);

            var sheet_table =document.getElementsByTagName('table')[15];
            $('body').empty();
            var sheet_row   =sheet_table.getElementsByTagName('tr');
            //alert(sheet_row.length); //how many sheet

            $('body').append("<p>"+sheet_row[0].innerHTML+"</p>");// table HEAD is here
            var sheet_in_row   =sheet_row[0].getElementsByTagName('td');
            var row_length=sheet_in_row.length; // cal table row length

            for(var i=1;i<sheet_row.length;i++){

                $('body').append("<p>"+sheet_row[i].getElementsByTagName('td')[1].innerHTML+"</p>");//get orientation here
                for(var j=2;j<row_length;j++){
                    item=sheet_row[i].getElementsByTagName('td')[j];
                    item_link=item.getElementsByTagName('a');
                    //console.log(i+":"+item_link.length);
                    if(item_link.length){
                        $("body").append('<a href="http://www.ce.kmitl.ac.th"'+item_link.item(0).getAttribute('href')+'">link</a><br/>');
                        var sheet   =new Object();
                        //sheet.subject_id=subject_id;
                        sheet.orientation=sheet_row[i].getElementsByTagName('td')[1].innerHTML;//add filename
                        sheet.f_num=parseInt(parseInt(j)-2);
                        //console.log(sheet.f_num);
                        sheet.link='http://www.ce.kmitl.ac.th/'+item_link.item(0).getAttribute('href');
                        allsheet.push(sheet);

                    }
                }
                $("body").append("<hr/>");
            }
            $.post("compare.php",
                {
                    data:JSON.stringify(allsheet),
                    subject_id:sj_id
                },
                function(data,status){
                    //alert("Data: " + data + "\nStatus: " + status);
                    $('body').empty();
                    $('body').append(data);
                });

        }
    );
}
