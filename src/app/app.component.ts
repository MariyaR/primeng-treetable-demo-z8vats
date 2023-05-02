import {Component,OnInit} from '@angular/core';
import {NodeService} from './nodeservice';
import {TreeNode} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    files1: TreeNode[];

    files2: any;

    cols: any[];

    constructor(private nodeService: NodeService) { }

    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files => this.files2 = files.filter( node => node.data['name']==="Applications" ||  node.data['name']==="Main"));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}
