/** @type {import('next').NextConfig} */
import { config } from 'dotenv';
config()
const nextConfig = {
  images: {
    domains: ['kingdomcollection.uk'],
  },
  env:{
    apikey:process.env.APIKEY
  }
};

    
  
export default nextConfig;
