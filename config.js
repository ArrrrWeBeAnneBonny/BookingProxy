module.exports = {
  dev: {
    overview: 'http://localhost:3003/',
    reviews: 'http://localhost:3001/',
    booking: 'http://localhost:3002/',
    photogallery: 'http://localhost:3004/',
    proxy: 'http://localhost:2000/'
  },
  production: {
    overview: 'https://fec-overview.s3-us-west-2.amazonaws.com/overview.js',
    reviews: 'https://reviews-avatars.s3-us-west-1.amazonaws.com/reviews.js',
    booking: 'http://localhost:3002/',
    photogallery: 'http://localhost:3004/',
    proxy: 'http://ec2-54-151-15-127.us-west-1.compute.amazonaws.com/'
  },
  allowedOrigins: [
    'http://localhost:2000/',
    'http://localhost:3002/',
    'https://fec-booking.s3-website-us-west-1.amazonaws.com',
    'http://ec2-54-151-15-127.us-west-1.compute.amazonaws.com/',
    'http://67.160.218.95.32:3002/',
    'http://67.160.218.95.32:80/',
    'http://67.160.218.95.32/'
  ]
}