# WordPress Headless CMS Setup for Technovita Solution

This guide explains how to set up and configure your WordPress installation to work as a headless CMS for your Next.js blog.

## WordPress Configuration

### 1. Install Required Plugins

Install and activate the following plugins on your WordPress site:

- **REST API (comes with WordPress core)** - Provides the API endpoints we'll use
- **Advanced Custom Fields (ACF)** - For adding custom fields to your posts
- **ACF to REST API** - Exposes ACF fields to the REST API
- **JWT Authentication for WP REST API** - Secures your API requests (optional but recommended)
- **Yoast SEO** - For better SEO control and metadata exposure to the API

### 2. Configure CORS

Add the following code to your WordPress site's `.htaccess` file (if using Apache) to enable CORS:

```apache
# Enable CORS
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
  Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
  Header set Access-Control-Allow-Headers "Authorization, Content-Type"
</IfModule>
```

If using Nginx, add this to your server configuration:

```nginx
# Enable CORS
add_header 'Access-Control-Allow-Origin' '*';
add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type';
```

### 3. Create Categories

Create blog categories in WordPress that match your business needs. Some suggestions:
- E-commerce Tips
- Seller Guides
- Platform Updates (Amazon, Flipkart, etc.)
- Success Stories
- Industry News

### 4. Configure Permalinks

Set your permalinks to "Post name" structure for clean URLs:
1. Go to Settings > Permalinks
2. Select "Post name" option
3. Save Changes

## Next.js Integration

### 1. Update WordPress API URL

Edit the `src/lib/wordpress.js` file and update the `WORDPRESS_API_URL` variable with your WordPress site URL:

```javascript
// Replace with your WordPress site URL
const WORDPRESS_API_URL = 'https://your-wordpress-site.com/wp-json/wp/v2';
```

### 2. Build and Deploy

After making the changes, build and deploy your Next.js application:

```bash
npm run build
npm run start
```

## Creating Blog Posts

1. Log in to your WordPress admin dashboard
2. Go to Posts > Add New
3. Write your post with a title, content, and featured image
4. Assign categories and tags
5. Use the Yoast SEO section to optimize your post's SEO
6. Publish the post

Your post will automatically appear on your Next.js blog after the revalidation period (set to 1 hour by default).

## Best Practices for SEO

1. **Use Featured Images**: Always add a featured image to your posts (recommended size: 1200x630px)
2. **Optimize Titles**: Keep titles under 60 characters and include keywords
3. **Meta Descriptions**: Write compelling meta descriptions (150-160 characters)
4. **Internal Linking**: Link to other posts and pages on your site
5. **Categories & Tags**: Use a consistent taxonomy structure
6. **Image Alt Text**: Add descriptive alt text to all images
7. **Headings Structure**: Use proper heading hierarchy (H1, H2, H3, etc.)
8. **URL Structure**: Keep URLs short and descriptive
9. **Mobile Optimization**: Ensure your content looks good on mobile devices

## Troubleshooting

If you encounter issues with the WordPress API:

1. **API Not Accessible**: Check that your WordPress site is publicly accessible
2. **CORS Errors**: Verify your CORS configuration
3. **Missing Data**: Ensure the REST API is enabled and not blocked by security plugins
4. **Authentication Issues**: Check your JWT configuration if using authenticated requests

## Additional Resources

- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Next.js Documentation](https://nextjs.org/docs)
- [ACF Documentation](https://www.advancedcustomfields.com/resources/)
