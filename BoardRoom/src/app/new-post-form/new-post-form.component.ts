import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})

export class NewPostFormComponent {
  form: FormGroup;
  tagsOptions = ['Math', 'Science', 'Social Studies', 'English', 'Spanish', 'Elementary School',
'Middle School', 'High School', 'College Prep', 'AP Course', 'Early College', 'Dual Enrollment', 'Extracurriculars',
'Athletics', 'Fitness', 'Support']; // Predefined tags

  constructor(private fb: FormBuilder,
    private postService: PostService,
    private dialogRef: MatDialogRef<NewPostFormComponent>) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tags: [[]] // Initialize tags as an empty array
    });
  }

  publishPost(post: Post){
    this.postService.publishPost(post);
    window.alert('Your post has succesfully been uploaded!')

  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      
    }
    let ret = this.form.value;
    let post = new Post(ret.title, ret.description, ret.tags)
    this.publishPost(post)
    this.dialogRef.close()
  }
}
