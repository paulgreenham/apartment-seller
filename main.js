HandlebarsIntl.registerWith(Handlebars)

const intlData = {"locales": "en-US"}

$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    let source = $("#result-template").html()
    let template = Handlebars.compile(source)
    let newHTML = template(
        {apartments}, 
        {data: {intl: intlData}}
    )
    $("#results").append(newHTML)
}

renderApts(apartments) //renders apartments when page loads