import React from 'react';
import CTA from '../components/CTA';

const About = () => {
    return (
        <div className="page-transition" style={{ paddingTop: '80px' }}>

            {/* Header */}
            {/* Header */}
            <div style={{ background: 'white', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <h1 className="fade-in-up" style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)' }}>About TechSchole</h1>
                <p style={{ color: 'var(--primary)', maxWidth: '600px', margin: '1rem auto', fontSize: '1.2rem' }}>
                    Platform pendidikan daring untuk masa depan teknologi Indonesia.
                </p>
            </div>

            <div className="container" style={{ padding: '4rem 0' }}>
                {/* Who We Are */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', borderLeft: '5px solid var(--primary)', paddingLeft: '1rem' }}>Who we are?</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569', background: '#eff6ff', padding: '2rem', borderRadius: '1rem' }}>
                        TechSchole adalah sebuah platform pendidikan daring yang menyediakan kursus-kursus teknologi terkini
                        kepada siswa dari berbagai latar belakang. Dengan fokus pada pembelajaran praktis dan interaktif,
                        TechSchole bertujuan untuk membantu siswa mengembangkan keterampilan teknologi yang diperlukan untuk
                        berhasil dalam dunia digital saat ini. Dengan kurikulum yang disusun oleh para ahli industri, TechSchole
                        memberikan pengalaman belajar yang berharga dan relevan bagi para pelajar yang ingin meningkatkan
                        keahlian teknis mereka.
                    </p>
                </section>

                {/* Vision */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', borderLeft: '5px solid var(--secondary)', paddingLeft: '1rem' }}>Our Vision</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569', background: '#f5f3ff', padding: '2rem', borderRadius: '1rem' }}>
                        Menjadi pusat pengembangan pendidikan dan teknologi non-formal yang terdepan dan berpengaruh secara
                        global, menciptakan generasi yang terampil, inovatif, dan siap menghadapi tantangan teknologi industri
                        dimasa sekarang maupun masa depan.
                    </p>
                </section>

                {/* Mission */}
                <section>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', borderLeft: '5px solid var(--accent)', paddingLeft: '1rem' }}>Our Mission</h2>
                    <div style={{ background: '#fff1f2', padding: '2rem', borderRadius: '1rem' }}>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#475569', fontSize: '1.1rem' }}>
                            <li>Memberikan pengalaman dengan kurikulum yang relevan dan terkini sesuai dengan perkembangan industri teknologi (AI, IoT, Instrumentasi, Quantum dan sebagainya), untuk mempersiapkan peserta kursus menghadapi kebutuhan pasar kerja yang dinamis.</li>
                            <li>Membantu meningkatkan peluang pengusaha - pengusaha dalam negeri untuk menyebarluaskan produk mereka sampai ranah global.</li>
                            <li>Memudahkan masyarakat untuk belajar dan mendapatkan fasilitas kegiatan belajar dan mengajar dimanapun dan kapanpun.</li>
                            <li>Menyelenggarakan program pendidikan, pelatihan, pengabdian masyarakat dengan industri teknologi terkemuka, untuk memberikan pengalaman praktis dan peluang karir kepada peserta kursus.</li>
                            <li>Menjalin kerjasama lintas sektor sebagai mitra yang saling bersinergi.</li>
                        </ul>
                    </div>
                </section>
            </div>

            <CTA />
        </div>
    );
};

export default About;
