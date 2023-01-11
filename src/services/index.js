import fetch from '@/utilities/http/task-api';

export function fetchUserProfile(id) {
  return fetch('get', '/profile/external/auth/get', { id });
}

export function uploadFiles(files) {
  const formData = new FormData();
  formData.append('file', files);
  return fetch('post', '/media/content/upload', formData);
}
