class ReportDecorator {
  constructor(items, name) {
    this.items = items;
    this.name = name;
  }

  id() {
    return this.name;
  }

  date() {
    return this.name;
  }

  getItems(){
    return this.items
  }

}

export default ReportDecorator;
