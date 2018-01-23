---
layout: page
title: Contact Us
lead: |
  We meet every Monday at 7:00 PM in Sennott Square Room 5317! We also hold frequent workshops.  All are welcome!
GoogleFormLink: "https://docs.google.com/forms/d/1eNwkgw6DWM_5nIuIv8EtAb1eZJRklYl8ELqJli43NIc/viewform"
permalink: /contact/
---

Want to get on our mailing list? Fill out our [Google Form](https://www.google.com/calendar/embed?src=pittcsc%40gmail.com&ctz=America/New_York)

## Contact The Club

- [Facebook](https://www.facebook.com/groups/554607607987835/)
- [Twitter](https://twitter.com/pittcsc)
- [Github](https://github.com/Pitt-CSC)
- [Email](mailto:pittcsc@gmail.com)

## Contact The Officers

<ul>
{% for officer in site.data.officers %}
  <li>{{officer.title}}: <a href='mailto:{{officer.email}}'>{{officer.name}}</a></li>
{% endfor %}
</ul>
