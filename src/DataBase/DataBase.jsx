import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ertkipibesptubzkqrup.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVydGtpcGliZXNwdHViemtxcnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMTk1MDMsImV4cCI6MjA1NDU5NTUwM30.cjEDdwdimB4DR5grsncLNH3um1tOxFpKsfEVmeP4xYY';

const supabase = createClient(supabaseUrl, supabaseKey);

// * تابعی برای فراخوانی عکس ها از دیتا بیس
export async function getImages() {
  const { data } = await supabase
    .storage
    .from('product')
    .list('');
  return data;
}

// * تابعی برای ریترن کردن عکس های دریافتی از api برای اینکه بتونیم توی تمامی کامپوننت ها استفاده کنیم
export default function ReturnImagesValues () {

  const [images, setImages] = useState([]);

  useEffect(() => {

    // * تابعی که ریسپانس دریافتی از ای پی آی رو میریزه توی استایت عکس ها
    async function fetchDataStorageImage() {
      const data = await getImages();
      setImages(data);
    }

    fetchDataStorageImage();
  }, []);

  return [images, setImages]
}