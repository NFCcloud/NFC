function generateVCard() {
    const form = document.getElementById('contactForm');
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    // Create vCard data as a string
    const vCardData = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${name}`,
        `TEL;TYPE=CELL:${phone}`,
        `EMAIL:${email}`,
        "END:VCARD"
    ].join("\n");

    // Convert the vCard data to a Blob and create a download link
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    // Create a temporary link to download the vCard
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Cleanup the URL object
    URL.revokeObjectURL(url);
}
