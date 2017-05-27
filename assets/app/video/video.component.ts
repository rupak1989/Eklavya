import { Component, Input } from "@angular/core";
import { Video } from './video.model';

const VIDEOES: Video[] = [
  { id: 11 ,title:"video1", url: 'https://player.vimeo.com/video/204010747?autoplay=1' },
  { id: 12, title:"video2", url: 'https://player.vimeo.com/video/204535894?autoplay=1' },
  { id: 13, title:"video3", url: 'https://player.vimeo.com/video/204351060?autoplay=1' }
  
];
@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
   
    
})
export class VideoComponent {


    title = 'Video List';
  videos = VIDEOES;
  selectedVideo: Video;

  onSelect(video: Video): void {
    this.selectedVideo = video;
        $('#videoPlayer iframe').attr('src', video.url);
  }
 
}