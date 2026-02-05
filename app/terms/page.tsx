import Link from "next/link";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">情報掲示板サービス利用規約</h1>
                    <Link href="/" className="text-sm text-blue-600 hover:underline">
                        トップページへ戻る
                    </Link>
                </div>

                <div className="prose dark:prose-invert max-w-none space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">前文</h2>
                        <p className="text-muted-foreground">
                            本利用規約（以下「本規約」といいます。）は、World Info（以下「当方」といいます。）が提供する情報掲示板サービス（以下「本サービス」といいます。）の利用に関する条件を定めるものです。
                            本サービスを利用するすべての利用者（以下「利用者」といいます。）は、本規約の全ての条項に同意した上で、本サービスを利用するものとします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第1条（定義）</h2>
                        <p className="text-muted-foreground mb-4">本規約において使用する用語の定義は、以下のとおりとします。</p>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>「本サービス」：当方が運営する情報掲示板およびこれに関連する一切のサービスをいいます。</li>
                            <li>「利用者」：本規約に同意し、本サービスを利用する全ての個人または法人をいいます。</li>
                            <li>「投稿情報」：利用者が本サービスを利用して投稿、送信した文章、画像、動画、その他一切の情報をいいます。</li>
                            <li>「知的財産権」：著作権、特許権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、またはそれらの権利につき登録等を出願する権利を含みます。）をいいます。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第2条（本規約への同意）</h2>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>利用者は、本サービスを利用することによって、本規約に有効かつ取消不能な同意をしたものとみなされます。</li>
                            <li>本サービスに関して当方が別途定めるプライバシーポリシーや各種ルール（以下「個別規約」といいます。）も、本規約の一部を構成するものとします。</li>
                            <li>本規約の定めと個別規約の定めが抵触する場合には、個別規約の定めが優先して適用されるものとします。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第3条（禁止事項）</h2>
                        <p className="text-muted-foreground mb-4">利用者は、本サービスの利用にあたり、自らまたは第三者をして、以下の各号に該当する行為またはそのおそれのある行為をしてはなりません。</p>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>法令、裁判所の判決、決定もしくは命令、または法令上拘束力のある行政措置に違反する行為。</li>
                            <li>公の秩序または善良の風俗を害する行為（過度に暴力的な表現、露骨な性的表現、人種、国籍、信条、性別、社会的身分等による差別につながる表現、その他反社会的な内容を含み他人に不快感を与える表現を投稿する行為を含みます。）。</li>
                            <li>当方または第三者の知的財産権、肖像権、プライバシー、名誉、その他の権利または利益を侵害する行為。</li>
                            <li>犯罪行為を助長し、またはこれに関連する行為。</li>
                            <li>事実に反する情報、またはその可能性がある情報を投稿する行為。</li>
                            <li>当方が許可しない、営利、広告、宣伝、勧誘等を目的とする行為。</li>
                            <li>他の利用者に対する嫌がらせ、誹謗中傷、ストーカー行為。</li>
                            <li>他の利用者の個人情報を収集、開示、または提供する行為。</li>
                            <li>コンピュータ・ウィルスその他の有害なコンピュータ・プログラムを含む情報を投稿または送信する行為。</li>
                            <li>本サービスのネットワークまたはシステム等に過度な負荷をかける行為、または不正にアクセスする行為。</li>
                            <li>本サービスの運営を妨害するおそれのある行為。</li>
                            <li>その他、当方が不適切と合理的に判断する行為。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第4条（投稿情報の取扱い）</h2>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>利用者は、投稿情報について、自らが投稿その他送信することについての適法な権利を有していること、および投稿情報が第三者の権利を侵害していないことについて、当方に対し表明し、保証するものとします。</li>
                            <li>
                                投稿情報の著作権は、当該投稿を行った利用者自身に留保されます。
                                ただし、当方は、本サービスの提供、維持、改善またはプロモーションに必要な範囲において、投稿情報を無償で、非独占的に、複製、上映、公衆送信、展示、頒布、翻訳、改変等する権利（サブライセンス権を含みます。）を利用者から許諾されるものとします。
                                利用者は、この利用に関して、著作者人格権を行使しないものとします。
                            </li>
                            <li>
                                当方は、法令または本規約の遵守状況を確認する必要がある場合、投稿情報の内容を確認することができます。
                                ただし、当方はそのような確認を行う義務を負うものではありません。
                            </li>
                            <li>当方は、利用者が投稿した情報が第3条（禁止事項）に該当する、またはそのおそれがあると判断した場合、その他業務上の合理的な理由に基づき、利用者への事前の通知なしに、当該投稿情報の全部または一部を削除または非表示とすることができるものとします。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第5条（規約違反に対する措置）</h2>
                        <p className="text-muted-foreground">
                            当方は、利用者が本規約に違反したと判断した場合、当該利用者に対し、事前の通知なしに、投稿情報の削除、本サービスの全部または一部の利用停止、その他当方が必要かつ適切と判断する措置を講じることができるものとします。
                            なお、本条に基づく当方の措置により利用者に生じた損害について、当方は一切の責任を負いません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第6条（本サービスの変更、中断、終了）</h2>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>
                                当方は、当方の都合により、本サービスの内容を変更し、または提供を終了することができます。
                                当方が本サービスの提供を終了する場合、当方は利用者に事前に通知するものとします。
                            </li>
                            <li>
                                当方は、以下のいずれかに該当する場合には、利用者に事前に通知することなく、本サービスの全部または一部の提供を停止または中断することができるものとします。
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>(1) 本サービスに係るシステムの点検または保守作業を緊急に行う場合</li>
                                    <li>(2) コンピュータ、通信回線等が事故により停止した場合</li>
                                    <li>(3) 地震、落雷、火災、風水害、停電、天災地変などの不可抗力により本サービスの運営ができなくなった場合</li>
                                    <li>(4) その他、当方が停止または中断を必要と判断した場合</li>
                                </ul>
                            </li>
                            <li>当方は、本条に基づき当方が行った措置により利用者に生じた損害について、一切の責任を負いません。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第7条（免責事項）</h2>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>当方は、本サービスまたは投稿情報の内容の正確性、完全性、有用性、特定目的への適合性、安全性等について、明示的か黙示的かを問わず、いかなる保証も行いません。</li>
                            <li>利用者は、自己の責任において本サービスを利用するものとし、本サービスを利用してなされた一切の行為とその結果について一切の責任を負うものとします。</li>
                            <li>利用者間または利用者と第三者との間で生じた取引、連絡、紛争等については、利用者の責任において処理および解決するものとし、当方はかかる事項について一切責任を負いません。</li>
                            <li>
                                本規約が消費者契約法に定める消費者契約となる場合、本規約のうち、当方の損害賠償責任を完全に免責する規定は適用されないものとします。
                                この場合において利用者に発生した損害が当方の債務不履行または不法行為に基づくときは、当方は、当該利用者が直接被った損害を上限として損害賠償責任を負うものとします。
                                ただし、当方に故意または重過失がある場合を除きます。
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第8条（個人情報の取扱い）</h2>
                        <p className="text-muted-foreground">当方は、利用者の個人情報を、当方が別途定める「プライバシーポリシー」に基づき、適切に取り扱うものとします。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第9条（本規約の変更）</h2>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>当方は、当方が必要と判断する場合、利用者の事前の承諾を得ることなく、いつでも本規約を変更することができます。</li>
                            <li>
                                変更後の本規約は、当方が運営するウェブサイト内の適宜の場所に掲示した時点からその効力を生じるものとし、利用者が本規約の変更後も本サービスの利用を継続する場合、当該利用者は変更後の本規約に同意したものとみなします。
                                変更内容に同意できない利用者は、本サービスの利用を中止してください。
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第10条（準拠法および管轄裁判所）</h2>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>本規約の準拠法は日本法とします。</li>
                            <li>本規約または本サービスに起因し、または関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
                        </ul>
                    </section>

                    <section className="pt-8 border-t">
                        <h2 className="text-lg font-semibold mb-2">附則</h2>
                        <p className="text-muted-foreground">2026年2月5日 制定・施行</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
