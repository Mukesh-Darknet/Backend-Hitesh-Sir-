class ApiResponce{
    constructor(
      statusCode,
      message = "Success",
      data
    ){
      this.statusCode = statusCode;
        this.success = success;
        this.message = message;
        this.data = data;
    }
}