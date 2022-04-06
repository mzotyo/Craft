public class ToDo {
  private String description;
  private String status;

  public ToDo(String description) {
    this.description = description;
  }

  public ToDo(String description, String status) {
    this.description = description;
    this.status = status;
  }

  public String getDescription() {
    return description;
  }
  
  public String getStatus() {
    return status;
  }
}
