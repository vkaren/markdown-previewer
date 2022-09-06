marked.setOptions({
    breaks: true,
  });
  
  $("#preview").html(marked.parse($("#editor").val()));
  
  $("#editor").on("input", onInput);
  
  function onInput() {
    $("#preview").html(marked.parse($("#editor").val()));
  }