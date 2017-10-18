import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
  currData = [

  ]
  name: String;
  date: Date = null;
  id: Number;
  showMap = false;
  constructor(private http: Http, private config: AppConfig, private router: Router) {
    this.createTable();
    this.length = this.data.length;
    //console.log(this.currData);

  }
  public rows: Array<any> = [];
  public columns: Array<any> = [
    { title: 'מספר', name: 'id', /*filtering: { filterString: '', placeholder: 'Filter by name' }*/ },
    {
      title: 'שם',
      name: 'name',
      sort: false,
      /*filtering: { filterString: '', placeholder: 'Filter by position' }*/
    },
    { title: 'תאריך', className: ['office-header', 'text-success'], name: 'date', sort: 'asc' },
    /*{ title: 'Extn.', name: 'ext', sort: '', filtering: { filterString: '', placeholder: 'Filter by extn.' } },
    { title: 'Start date', className: 'text-warning', name: 'startDate' },
    { title: 'Salary ($)', name: 'salary' }*/

  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;
  public tconfig: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };

  private data: Array<any> = [{ id: 'ש', name: 'a', date: 'b' }];


  paths = [];
  eventList = [];
  url = this.config.apiUrl;
  search() {
    var searchData = {
      event_name: this.name,
      e_time: this.date,
      event_id: this.id
    }
    //console.log(searchData);


  }
  setSelected(k) {
    //this.showMap = true;
    //console.log(k);
    console.log(k.row.name);
    //this.router.navigate(['inquiry-map']);

  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;

    this.columns.forEach((column: any) => {

      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {

          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {

      return filteredData;
    }

    if (config.filtering.columnName) {

      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.tconfig.filtering.filterString));
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {

        if (item[column.name].toString().match(this.tconfig.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }
  createTable() {
    this.http.get(this.config.apiUrl + '/eventRequest.php').subscribe((r: Response) => {
      //console.log(r);
      var res = r.json();
      if (res == 'NO EVENTS') {
        return;
      }
      for (let k of res) {
        this.currData.push(k);
        //console.log(k.event_id);
        //console.log(k.event_name);
      }

    });

  }
  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.tconfig.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }
  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }
  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {

    if (config.filtering) {
      Object.assign(this.tconfig.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.tconfig.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.tconfig);
    let sortedData = this.changeSort(filteredData, this.tconfig);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }
  ngOnInit() {
    this.onChangeTable(this.tconfig);

  }


}


