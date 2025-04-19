# Create images directory if it doesn't exist
$imagesDir = ".\public\images"
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir
}

# Download sample images
$imageUrls = @{
    "hero-bg.jpg" = "https://source.unsplash.com/1600x900/?programming,technology"
    "profile.jpg" = "https://source.unsplash.com/400x600/?portrait,professional"
}

foreach ($image in $imageUrls.GetEnumerator()) {
    $outputPath = Join-Path $imagesDir $image.Key
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}

Write-Host "Images downloaded successfully!"
