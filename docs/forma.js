function generateVCard() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const company = document.getElementById('company').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;

    const fullName = `${firstName} ${lastName}`;

    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${fullName}
ORG:${company}
TEL:${phone}
EMAIL:${email}
ADR:${address}
URL:${website}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${fullName}.vcf`;
    a.click();

    URL.revokeObjectURL(url);
}
