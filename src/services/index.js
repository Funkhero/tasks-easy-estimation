import fetch from '@/utilities/http/task-api';

export function fetchUserProfile(id) {
  return fetch('get', '/profile/external/auth/get', { id });
}

export function uploadFiles(files) {
  return fetch('post', '/media/content/upload', { files });
}
